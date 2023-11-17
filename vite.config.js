import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unpluginComponent from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
// https://vitejs.dev/config/

export default defineConfig({
  base: '/dashboard/',
  plugins: [
    vue(),
    unpluginComponent(),
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
