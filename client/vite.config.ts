import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Allows "@/..." imports
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/dist'), // ✅ Outputs directly to Flask static folder
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0', // ✅ Allows access from network or Docker/Render
    port: 5173,
    open: true,
    strictPort: true,
  },
});
