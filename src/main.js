import { app } from '@/plugin/main-app'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './lang'
import '@/styles/style.css'
import './beforeRouterPermission'
import directives from './directives'
import NotifyPlugin from './plugin/notify'
import ToastPlugin from './plugin/notification'

directives(app)

app.use(createPinia())

app.use(router)
app.use(i18n)
app.use(NotifyPlugin)
app.use(ToastPlugin)
app.mount('#app')
