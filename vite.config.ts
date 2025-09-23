import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [reactPlugin(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), './src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      cssFileName: 'index'
    },
    sourcemap: true
  }
})
