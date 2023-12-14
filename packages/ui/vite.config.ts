import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
    ],
    resolve: {
        alias: {
          "@": resolve(__dirname, "./lib"),
        },
      },
    build: {
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'cvrts-ui',
            fileName: 'index'
        },
        rollupOptions: {
            external: [
                'vue'
            ],
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