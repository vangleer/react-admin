import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@': pathResolve('src'),
      '@': pathResolve('src')
    }
  },
  server: {
    hmr: true,
    // 端口号
    port: 3002,
    host: '0.0.0.0',
    // // 本地跨域代理
    proxy: {
      '/v1': {
        target: 'http://192.168.1.17:8888',
        changeOrigin: true,
      }
    }
  }
})
