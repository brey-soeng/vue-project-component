import i18n from '@/lang'
import { nextTick } from 'vue'

const Trans = {
  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
  },

  get currentLocale() {
    return i18n.global.locale.value
  },

  // set current language to local
  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale
  },

  //switch language and query from html
  async switchLanguages(newLocale) {
    await Trans.loadLocalMessages(newLocale)
    Trans.currentLocale = newLocale
    document.querySelector('html').setAttribute('lang', newLocale)
    //set to localstorage
    localStorage.setItem('locale', newLocale)
  },

  async loadLocalMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/lang/locales/${locale}.js`)
      i18n.global.setLocaleMessage(locale, messages.default)
    }
    return nextTick()
  },

  //check if support languages
  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale)
  },

  //get user local language from browser
  getUserLocale() {
    const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },

  // get persisted locale lanuage
  getPersistedLoale() {
    const persistedLocale = localStorage.getItem('locale')
    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale
    } else {
      return null
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLoale()
    if (userPersistedLocale) {
      return userPersistedLocale
    }
    const userPreferredLocale = Trans.getUserLocale()

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale

    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale())
    }

    await Trans.switchLanguages(paramLocale)

    return next()
  },

  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  }
}

export default Trans
