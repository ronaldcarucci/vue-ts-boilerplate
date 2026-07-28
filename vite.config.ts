import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // New v4 plugin

export default defineConfig({
  plugins: [vue(), tailwindcss()],
})