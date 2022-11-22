import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import esmImportToUrl from 'rollup-plugin-esm-import-to-url';
import replace from '@rollup/plugin-replace';

export default [
	{
		input: 'package/index.js',
		output: [
			{
				dir: 'package/browser',
				format: 'es',
				sourcemap: true,
				plugins: [terser()]
			}
		],
		plugins: [
			replace({
				preventAssignment: true,
				'process.env.NODE_ENV': JSON.stringify('production')
			}),
			esmImportToUrl({
				imports: {
					tslib: 'https://unpkg.com/tslib@2/tslib.es6.js',
					svelte: 'https://unpkg.com/svelte@3/internal/index.mjs',
					'svelte/animate': 'https://unpkg.com/svelte@3/animate/index.mjs',
					'svelte/easing': 'https://unpkg.com/svelte@3/easing/index.mjs',
					'svelte/internal': 'https://unpkg.com/svelte@3/internal/index.mjs',
					'svelte/motion': 'https://unpkg.com/svelte@3/motion/index.mjs',
					'svelte/ssr': 'https://unpkg.com/svelte@3/ssr/index.mjs',
					'svelte/store': 'https://unpkg.com/svelte@3/store/index.mjs',
					'svelte/transition': 'https://unpkg.com/svelte@3/transition/index.mjs',
					'svelte/compiler': 'https://unpkg.com/svelte@3/compiler.mjs'
				}
			}),
			svelte({
				emitCss: false
			}),
			resolve({ browser: true }),
			commonjs({
				transformMixedEsModules: true
			})
		]
	}
];
