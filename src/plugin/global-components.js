import { defineAsyncComponent } from 'vue'
import { app } from './main-app'
const globalComponentsPaths = import.meta.glob('@/components/**/*.vue')
Object.entries(globalComponentsPaths).forEach(([path, module]) => {
  const componentsName = path
    .split('/')
    .pop()
    .replace(/\.vue$/, '')
  app.component(componentsName, defineAsyncComponent(module))
})
