import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { type Plugin } from 'vite';

function externalLinksPlugin(): Plugin {
	return {
		name: 'external-links',
		transform(code: string, id: string) {
			// Early return if file type doesn't match or no links detected
			if (!id.match(/\.(svelte|md)$/)) return null;
			if (!code.includes('<a') && !code.includes('[')) return null;

			let transformedCode = code;

			// Handle HTML-style links
			transformedCode = transformedCode.replace(
				/<a([^>]+)href=(["'])(https?:\/\/[^"']+)\2([^>]*)>/g,
				'<a$1href=$2$3$2 target="_blank" rel="noreferrer"$4>'
			);

			// Handle markdown-style links - convert to HTML style
			if (id.endsWith('.md')) {
				transformedCode = transformedCode.replace(
					/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
					'<a href="$2" target="_blank" rel="noreferrer">$1</a>'
				);
			}

			return {
				code: transformedCode,
				map: null
			};
		}
	};
}

export default defineConfig({
	plugins: [sveltekit(), externalLinksPlugin()],
	server: {
		fs: {
			allow: ['.']
		}
	},
	ssr: {
		noExternal: ['mdsvex']
	}
});
