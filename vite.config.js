import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
// https://vitejs.dev/config/

export default defineConfig({
  base: '/tvc-components/',
  plugins: [
    vue(),
    VueI18nPlugin({
      runtimeOnly: false,
      include: path.resolve(__dirname, './src/lang/locales/**') // provide a path to the folder where you'll store translation data (see below)
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
