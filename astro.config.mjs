import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'
import expressiveCode from 'astro-expressive-code'
import { expressiveCodeOptions } from './src/site.config'
import icon from 'astro-icon'

const SERVER_PORT = 3000
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`
const LIVE_URL = 'https://mumaroi.github.io'

const SCRIPT = process.env.npm_lifecycle_script || ""
const isBuild = SCRIPT.includes("astro build")
let BASE_URL = LOCALHOST_URL

if (isBuild) {
	BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
	server: { port: SERVER_PORT },
	site: BASE_URL,
	integrations: [
		expressiveCode(expressiveCodeOptions),
		tailwind({
			applyBaseStyles: false
		}),
		sitemap(),
		mdx(),
		icon()
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['nofollow, noopener, noreferrer']
				}
			]
		],
		remarkRehype: {
			footnoteLabelProperties: {
				className: ['']
			}
		}
	},
	prefetch: true,
})
