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
    sourcemap: false
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    },
    include: [
      "react-reveal",
      "react-headroom",
      "react-twitter-embed",
      "colorthief",
      "react-easy-emoji"
    ]
  }
});
