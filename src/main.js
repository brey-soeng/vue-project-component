import { app } from '@/plugin/main-app'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './lang'
import '@/styles/style.css'

import '@/plugin/global-components'

router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location = to.href
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
