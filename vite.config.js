import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), SvelteKitPWA()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default defineConfig(config)
