import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

function remarkRemoveFirstHeading() {
	return (tree) => {
		let foundFirst = false;
		tree.children = tree.children.filter((node) => {
			if (node.type === 'heading' && !foundFirst) {
				foundFirst = true;
				return false;
			}
			return true;
		});
	};
}

const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	smartypants: true,
	remarkPlugins: [remarkRemoveFirstHeading]
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
