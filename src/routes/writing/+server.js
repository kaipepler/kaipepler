/**
 * @typedef {Object} Article
 * @property {string} title
 * @property {string} description
 * @property {string} date
 * @property {string} update
 * @property {string[]} categories
 */

import { json } from '@sveltejs/kit';

/**
 * Retrieves and processes markdown articles from the src/articles directory
 * @returns {Promise} Array of article objects sorted by date
 */
async function getArticles() {
	// Initialize empty array to store processed articles
	let articles = [];

	// Use Vite's glob import to get all .md files from articles directory
	// eager: true means files are loaded immediately instead of on-demand
	const paths = import.meta.glob('$lib/articles/*.md', { eager: true });

	// Iterate through each markdown file path
	for (const path in paths) {
		const file = paths[path];
		// Extract slug from filename by getting last part of path and removing .md extension
		const slug = path.split('/').at(-1)?.replace('.md', '');

		// Verify file is valid and contains metadata
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			/** @type {Partial<Article>} */
			const metadata = file.metadata;

			// Create complete article object by combining metadata with slug
			const article = { ...metadata, slug };
			articles.push(article);
		}
	}

	// Sort articles by date in descending order (newest first)
	articles = articles.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return articles;
}

/**
 * GET endpoint handler that returns all published articles as JSON
 * This endpoint will be available at /writing
 */
export async function GET() {
	const articles = await getArticles();
	return json(articles);
}
