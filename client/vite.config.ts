import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/dist'), // ✅ Output to Flask's static folder
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    strictPort: true,
  },
});
