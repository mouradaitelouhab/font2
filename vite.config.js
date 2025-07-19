import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: [
      
      "https://back2-2z57.onrender.com"
    ],
    proxy: {
      '/api': {
        target: 'https://back2-2z57.onrender.com/api',  // your backend URL for local dev
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
