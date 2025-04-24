import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/my_portfolio', //  phải trùng tên repo
  plugins: [  tailwindcss(),react()],
  build: {
    chunkSizeWarningLimit: 1000, // Giới hạn 1 MB
  },
})
