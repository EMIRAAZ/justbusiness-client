import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageminPlugin from "vite-plugin-imagemin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    imageminPlugin(),
  ],
  server:{
    port:3000
  },
})
