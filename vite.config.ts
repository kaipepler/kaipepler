import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { type Plugin } from 'vite';

function externalLinksPlugin(): Plugin {
	return {
		name: 'external-links',
		transform(code: string, id: string) {
			if (!id.endsWith('.svelte') || !code.includes('<a')) return null;

			return {
				code: code.replace(
					/<a([^>]+)href=(["'])(https?:\/\/[^"']+)\2([^>]*)>/g,
					'<a$1href=$2$3$2 target="_blank" rel="noreferrer"$4>'
				),
				map: null
			};
		}
	};
}

export default defineConfig({
	plugins: [sveltekit(), externalLinksPlugin()]
});
