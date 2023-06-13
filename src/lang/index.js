import { createI18n } from 'vue-i18n'
import en from './locales/en'

export const i18n = new createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en },
  runtimeOnly: false
})

export default i18n
