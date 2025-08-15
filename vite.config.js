import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-website/',
  server: {
    host: true,           
    port: 5173,           
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.40.47',          
      'stupid-dogs-peel.loca.lt' 
    ]
  }
})