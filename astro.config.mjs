import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
	site: 'https://be4itis2late.com',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		react(),
		robotsTxt(),
		sitemap(),
		prefetch(),
		compress()
	]
})
