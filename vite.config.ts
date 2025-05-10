import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

function addAriaDescribedBy() {
	const targetBlankRegex = /target="_blank"/;
	const ariaDescribedBy = ' aria-describedby="newTab"';

	return {
		name: 'vite-plugin-external-links',
		transform(code: string, id: string) {
			// Early return if not a Svelte file
			if (!id.endsWith('.svelte')) return;

			// Early return if no target="_blank" found
			if (!targetBlankRegex.test(code)) return;

			return {
				code: code.replace(/<a\s(?=[^>]*target="_blank")([^>]*?)>/g, `<a $1${ariaDescribedBy}>`),
				map: null
			};
		}
	};
}

export default defineConfig({
	plugins: [addAriaDescribedBy(), sveltekit()]
});
