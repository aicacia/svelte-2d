import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	resolve: {
		alias: {
			'svelte-2d': path.resolve('src/lib')
		}
	},
	plugins: [sveltekit()]
};

export default config;
