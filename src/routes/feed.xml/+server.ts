import * as config from '$lib/config';
import type { Article } from '$lib/types';
import { compile } from 'mdsvex';

export const config = {
	runtime: 'nodejs18.x'
};

export async function GET({ fetch }) {
	const response = await fetch('/writing');
	const articles: Article[] = await response.json();

	// Fetch and parse content for each article
	const articlesWithContent = await Promise.all(
		articles.map(async (article) => {
			const contentResponse = await fetch(`/writing/${article.slug}`);
			const markdown = await contentResponse.text();
			const compiled = await compile(markdown);
			let htmlContent = compiled?.code || '';

			// Trim content to only include what's between </small> and </article>
			const smallIndex = htmlContent.indexOf('</small>');
			const articleEndIndex = htmlContent.indexOf('</article>');

			if (smallIndex !== -1 && articleEndIndex !== -1) {
				htmlContent = htmlContent
					.slice(smallIndex + 8, articleEndIndex)
					.replace(/<!--.*?-->/g, '') // Remove HTML comments
					.trim();
			}

			return { ...article, content: htmlContent };
		})
	);

	const headers = { 'Content-Type': 'application/xml' };
	const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
        <rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
            <channel>
                <title>${config.title}</title>
                <link>${config.url}</link>
                <description>${config.description}</description>
                <language>en-US</language>
                <atom:link href="${config.url}/feed.xml" rel="self" type="application/rss+xml"/>
                    ${articlesWithContent
											.map(
												(article) => `
                            <item>
                                <title>${article.title}</title>
                                <link>${config.url}writing/${article.slug}</link>
                                <pubDate>${new Date(article.date).toUTCString()}</pubDate>
                                <guid>${config.url}writing/${article.slug}</guid>
                                <description>${article.description}</description>
                                <content:encoded><![CDATA[${article.content}]]></content:encoded>
                            </item>
                            `
											)
											.join('')}
            </channel>
        </rss>
    `.trim();

	return new Response(xml, { headers });
}
