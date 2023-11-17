import { app } from '@/plugin/main-app'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './lang'
import '@/styles/style.css'
import './beforeRouterPermission'
import directives from './directives'

import mitt from 'mitt'
const emitter = mitt()
app.config.globalProperties.emitter = emitter

directives(app)

app.use(createPinia())

app.use(router)
app.use(i18n)
app.mount('#app')
