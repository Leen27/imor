import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    plugins: [
        UnoCSS(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'cvrts-editor',
            fileName: 'index'
        },
        rollupOptions: {
            external: []
        }
    }
})