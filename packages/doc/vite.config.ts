import { cloudflare } from '@cloudflare/vite-plugin'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactPlugin(), vanillaExtractPlugin(), cloudflare()],
  resolve: {
    alias: {
      vecui: fileURLToPath(new URL('../ui/src', import.meta.url))
    }
  }
})
