import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 的地址带子路径（用户名.github.io/仓库名/），
  // 用相对路径才能正常加载 JS / CSS / 图片。本地预览不受影响。
  base: './',
  server: {
    port: 5173,
    host: '127.0.0.1',
    open: false,
  },
  preview: {
    port: 4173,
    host: '127.0.0.1',
  },
})
