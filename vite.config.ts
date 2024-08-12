import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: [
      {
        find: '@', 
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: '@components', 
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@pages', 
        replacement: path.resolve(__dirname, './src/pages')
      },
      {
        find: '@layouts', 
        replacement: path.resolve(__dirname, './src/layouts')
      },
      {
        find: '@ui', 
        replacement: path.resolve(__dirname, './src/ui')
      },
      {
        find: '@utils', 
        replacement: path.resolve(__dirname, './src/utils')
      },
      {
        find: '@styles', 
        replacement: path.resolve(__dirname, './src/styles')
      }
    ]
  }
})
