import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Tells Vite that "@" means "client/src"
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../server/dist'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
})
