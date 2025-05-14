import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kamakshi-kalagara/',
  assetsInclude: ['**/*.docx'], // Ensure .docx files are handled as assets
})
