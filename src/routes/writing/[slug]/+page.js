import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
	// Redirect if the request is for feed.xml
	if (params.slug === 'feed.xml') {
		throw redirect(307, '/writing/feed.xml');
	}

	try {
		const article = await import(`$lib/articles/${params.slug}.md`);

		return {
			content: article.default,
			meta: article.metadata
		};
	} catch (e) {
		throw error(404, 'Article not found');
	}
}
