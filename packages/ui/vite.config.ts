import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        vue(),
        // visualizer({
        //     gzipSize: true,
        //     brotliSize: true,
        //     emitFile: false,
        //     filename: "test.html", //分析图生成的文件名
        //     open:true //如果存在本地服务端口，将在打包后自动展示
        // }),
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
                'vue', '@cvrts/shared', '@cvrts/utils', '@cvrts/core', '@cvrts/editor', 'radix-vue'
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