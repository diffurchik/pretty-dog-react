import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://animals.maxz.dev',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
        secure: false, // Use only if HTTPS causes issues
      },
    },
  },
},
)
