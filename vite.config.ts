import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prismjsPlugin from "vite-plugin-prismjs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  prismjsPlugin({
    languages: 'all'
  })],
  server: {
    open: '/',
    proxy: {
      '/api': {
        // target: 'http://139.9.221.111',
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      '/ip': {
        target: 'http://pv.sohu.com',//这里是域名，不是完整地址
        changeOrigin: true,//是否跨域
        rewrite: (path => path.replace(/^\/ip/,'/'))
    },
    port: '3000'
  }
},})
