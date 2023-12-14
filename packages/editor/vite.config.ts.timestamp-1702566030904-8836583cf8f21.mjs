// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/linjq/code/imor/node_modules/.pnpm/vite@5.0.8_@types+node@18.19.3/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/linjq/code/imor/node_modules/.pnpm/unocss@0.58.0_postcss@8.4.32_vite@5.0.8/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "/Users/linjq/code/imor/packages/editor";
var vite_config_default = defineConfig({
  plugins: [
    UnoCSS()
  ],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      name: "cvrts-editor",
      fileName: "index"
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
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGluanEvY29kZS9pbW9yL3BhY2thZ2VzL2VkaXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpbmpxL2NvZGUvaW1vci9wYWNrYWdlcy9lZGl0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpbmpxL2NvZGUvaW1vci9wYWNrYWdlcy9lZGl0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgVW5vQ1NTKCksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgICBsaWI6IHtcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ2xpYi9pbmRleC50cycpLFxuICAgICAgICAgICAgbmFtZTogJ2N2cnRzLWVkaXRvcicsXG4gICAgICAgICAgICBmaWxlTmFtZTogJ2luZGV4J1xuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyBleHRlcm5hbDogW1xuICAgICAgICAgICAgLy8gICAgICdAY3ZydHMvc2hhcmVkJywgJ0BjdnJ0cy91dGlscydcbiAgICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAvLyBpbmxpbmVEeW5hbWljSW1wb3J0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICdyZW5kZXItbGliJzogWydrb252YScsICdzdGF0cy5qcyddIFxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8gZm9ybWF0OiAnZXNtJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQW9TLFNBQVMsZUFBZTtBQUM1VCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFlBQVk7QUFGbkIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLEVBQ1g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ2Q7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlYLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNUjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
