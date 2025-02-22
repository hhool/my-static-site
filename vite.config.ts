import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
plugins: [
  react(),
  viteStaticCopy({
    targets: [
      {
        src: 'public/images/*.jpg', // Adjust the path to your JSON files
        dest: 'images/' // Copy to the root of the dist directory
      },
      {
        src: 'public/images/*.ico', // Adjust the path to your JSON files
        dest: 'images/' // Copy to the root of the dist directory
      }
    ]
  })
],
})
