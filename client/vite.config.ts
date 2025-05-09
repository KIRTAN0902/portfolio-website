import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@server": path.resolve(__dirname, "../server"),
    },
  },
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../server/dist"),
    target: "esnext",
    emptyOutDir: true,
  },
  server: {
    hmr: true,
    port: 3000,
  },
});
