import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      rollupTypes: true,
	  tsconfigPath: "./tsconfig.app.json",
	  insertTypesEntry: true
    }),
	cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "ReactTSLib",
      fileName: (format) => `react-ts-lib.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});