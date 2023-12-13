import { resolve } from 'path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
    plugins: [
        UnoCSS(),
    ],
    build: {
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'cvrts-editor',
            fileName: 'index'
        },
        rollupOptions: {
            // external: [
            //     '@cvrts/shared', '@cvrts/utils'
            // ],
            output: {
                // inlineDynamicImports: false,
                // manualChunks: {
                //     'render-lib': ['konva', 'stats.js'] 
                // },
                // format: 'esm'
            }
        }
    }
})