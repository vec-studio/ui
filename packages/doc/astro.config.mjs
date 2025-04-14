import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  adapter: cloudflare(),
  integrations: [react(), starlight({ title: '' })],
  output: 'static',
  vite: {
    plugins: [vanillaExtractPlugin()],
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        vecui: fileURLToPath(new URL('../vecui/src', import.meta.url))
      }
    }
  }
})
