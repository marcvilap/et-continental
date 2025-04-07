import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	base: '/bc/mejorneumatico/',
	devToolbar: { enabled: false },
	integrations: [tailwind({ applyBaseStyles: false })],
})
