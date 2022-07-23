import path from 'path';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true
		}),
		appDir: 'internal',
		paths: {
			base: process.env.USE_BASE_PATH ? '/svelte-2d' : ''
		},
		prerender: {
			default: true
		},
		vite: {
			resolve: {
				alias: {
					'svelte-2d': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
