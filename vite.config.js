import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages repository base path (disabled for local development)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          i18n: ['react-i18next', 'i18next']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    strictPort: false
  },
  preview: {
    port: 3000,
    host: true
  }
})