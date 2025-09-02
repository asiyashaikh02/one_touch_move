
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/one_touch_move/',   // ✅ repo name yaha daalna zaroori hai
})
