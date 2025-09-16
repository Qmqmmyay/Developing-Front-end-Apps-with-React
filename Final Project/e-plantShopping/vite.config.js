import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // repo này tên là "Developing-Front-end-Apps-with-React"
  base: '/Developing-Front-end-Apps-with-React/',
})
