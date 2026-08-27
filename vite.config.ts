import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const runtime = globalThis as typeof globalThis & {
	process?: { argv: string[]; env: Record<string, string | undefined> };
};
const configuredBase = runtime.process?.argv.includes('dev') ? '' : (runtime.process?.env.BASE_PATH ?? '');
const base: '' | `/${string}` = configuredBase.startsWith('/') ? configuredBase as `/${string}` : '';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({
				fallback: '404.html'
			}),
			paths: { base },
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
		})
	]
});
