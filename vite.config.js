import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TACO/", // ⚠️ 這裡填 GitHub 專案名稱
})
