import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// path
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)
// Auto Import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// 饿了么 plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      'comps': resolve('src/components'),
      'apis': resolve('src/apis'),
      'views': resolve('src/views'),
      'utils': resolve('src/utils'),
      'routes': resolve('src/routes'),
      'styles': resolve('src/styles')
    }
  }
})
