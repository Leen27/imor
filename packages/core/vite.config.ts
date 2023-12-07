import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Mes-UI-API',
            fileName: 'mes-ui-api'
        },
        rollupOptions: {
            external: []
        }
    }
})