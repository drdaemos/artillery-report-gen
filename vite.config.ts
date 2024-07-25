import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vitejs.dev/config/
// biome-ignore lint/style/noDefaultExport: vite config requires default export
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(import.meta.dirname, 'template/index.html'),
      },
    },
  },
  server: {
    open: '/template/index.html',
  },
})
