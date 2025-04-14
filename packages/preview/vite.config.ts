import { cloudflare } from '@cloudflare/vite-plugin'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), TanStackRouterVite(), reactPlugin(), cloudflare()],
  resolve: {
    alias: {
      vecui: fileURLToPath(new URL('../vecui/src', import.meta.url))
    }
  }
})
