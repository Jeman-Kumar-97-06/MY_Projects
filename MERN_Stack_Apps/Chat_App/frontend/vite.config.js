import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server : {
    proxy : {"/api" :{ 
      target: 'http://localhost:3000', // Backend URL
      changeOrigin: true,
      secure: false, // If using HTTPS, set this to true
      rewrite: (path) => path.replace(/^\/api/, ''), // Optional if your backend doesn't have '/api'
    }}
  }
})

