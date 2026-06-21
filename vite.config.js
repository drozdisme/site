import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset and PDF paths relative so the build works on
// Netlify, Vercel, Cloudflare Pages and GitHub Pages (sub-paths) alike.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
