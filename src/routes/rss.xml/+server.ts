import * as config from '$lib/config';
import type { Article } from '$lib/types';

export async function GET({ fetch }) {
	const response = await fetch('/api/writing');
	const articles: Article[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<link>${config.url}</link>
				<description>${config.description}</description>
        <language>en-US</language>
				<atom:link href="${config.url}rss.xml" rel="self" type="application/rss+xml"/>
				${articles
					.map(
						(article) => `
						<item>
							<title>${article.title}</title>
							<link>${config.url}writing/${article.slug}</link>
							<description>${article.description}</description>
							<pubDate>${new Date(article.date).toUTCString()}</pubDate>
							<guid>${config.url}writing/${article.slug}</guid>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
