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
				<description>${config.description}</description>
				<link>${config.url}</link>
				<atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
				${articles
					.map(
						(article) => `
						<item>
							<title>${article.title}</title>
							<description>${article.description}</description>
							<link>${config.url}/writing/${article.slug}</link>
							<guid isPermaLink="true">${config.url}/writing/${article.slug}</guid>
							<pubDate>${new Date(article.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
