import { app } from '@/plugin/main-app'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './lang'
import '@/styles/style.css'

import '@/plugin/global-components'

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
