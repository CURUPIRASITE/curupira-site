import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // garante que a raiz seja a do projeto
  build: {
    outDir: 'dist',
  },
})
