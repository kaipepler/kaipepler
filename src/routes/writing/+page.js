export async function load({ fetch }) {
	const response = await fetch('writing');
	const articles = await response.json();

	return {
		articles
	};
}
