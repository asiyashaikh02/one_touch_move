
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/one_touch_move/',  // 🔥 project repo name
  plugins: [react()],
})

