import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import { externalizeDeps as externalizeDepsPlugin } from 'vite-plugin-externalize-deps'

export default defineConfig({
  plugins: [reactPlugin(), vanillaExtractPlugin(), externalizeDepsPlugin(), dtsPlugin({ outDir: 'dist/types' })],
  build: {
    lib: {
      entry: resolve(dirname(fileURLToPath(import.meta.url)), 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
      cssFileName: 'index'
    },
    cssMinify: false,
    minify: false,
    sourcemap: false
  }
})
