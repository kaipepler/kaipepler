import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const mdsvexOptions = {
	extensions: ['.svx', '.md']
};

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
