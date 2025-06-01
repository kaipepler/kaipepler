import * as config from '$lib/config';
import type { Article } from '$lib/types';

export async function GET({ fetch }) {
	const response = await fetch('/api/writing');
	const articles: Article[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<feed xmlns="http://www.w3.org/2005/Atom">
      <title>${config.title}</title>
      <subtitle>Articles on accessibility, design systems, and development</subtitle>
      <link href="${config.url}/rss.xml" rel="self"/>
      <link href="${config.url}"/>
      <updated>${new Date().toISOString()}</updated>
      <id>${config.url}</id>
      <author>
        <name>Kai Pepler</name>
        <email>hello@kaipepler.com</email>
      </author>
				${articles
					.map(
						(article) => `
						<entry>
							<title>${article.title}</title>
							<description>${article.description}</description>
							<link href="${config.url}/writing/${article.slug}"/>
              <id>${config.url}/writing/${article.slug}</id>
							<updated>${new Date(article.date).toUTCString()}</updated>
						</entry>
					`
					)
					.join('')}
		</feed>
	`.trim();

	return new Response(xml, { headers });
}
