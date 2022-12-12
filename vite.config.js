import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: 'http://localhost:6000/api'
  },
  '/api': {
    target: 'http://localhost:6000/api',
    changeOrigin: true,
    secure: false,
    ws: true,
    rewrite: (path) => path.replace(/^\/api/, '/api'),
  },
})
