import type { Article } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('writing');
	const articles: Article[] = await response.json();

	return {
		articles
	};
}
