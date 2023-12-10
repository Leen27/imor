import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'utils/index.ts'),
            name: 'cvrts-utils',
            fileName: 'index'
        },
        rollupOptions: {
            external: []
        }
    }
})