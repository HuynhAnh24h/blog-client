import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  theme:{
    extend:{
      colors:{
        primary: "#1565D8",
        dark:{
          light: "#5A7184",
          hard:"#0D2436",
          soft:"#183B56",
        }
      }
    }
  }
})
