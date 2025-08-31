import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ apne repo name ke hisaab se base path set karo
export default defineConfig({
  plugins: [react()],
  base: '/one_touch_move/', 
})
