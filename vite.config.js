import {defineConfig, transformWithEsbuild} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!/src\/.*\.js$/.test(id)) return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
        });
      }
    },
    react()
  ],
  base: "/",
  build: {
    outDir: "build",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy vendor deps into separate cacheable chunks
          "vendor-react": ["react", "react-dom"],
          "vendor-lottie": ["lottie-react"],
          "vendor-twitter": ["react-twitter-embed"]
        }
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    },
    include: [
      "react-headroom",
      "react-twitter-embed",
      "colorthief",
      "react-easy-emoji"
    ]
  }
});
