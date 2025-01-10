import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/yourstech.net/',
  plugins: [react()],
  assetsInclude: ['**/*.MP4', '**/*.mp4'],
})
