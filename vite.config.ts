import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TodoArc',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-select'],
  },
})
