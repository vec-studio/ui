import { cloudflare } from '@cloudflare/vite-plugin'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    reactPlugin(),
    vanillaExtractPlugin(),
    cloudflare(),
    TanStackRouterVite({
      autoCodeSplitting: true,
      routesDirectory: './src',
      target: 'react',
      virtualRouteConfig: './routes.ts'
    })
  ],
  resolve: {
    alias: {
      vecui: fileURLToPath(new URL('../ui/src', import.meta.url))
    }
  }
})
