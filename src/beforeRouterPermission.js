import router from '@/router'
import getPageTitle from '@/utils/getPageTitle'
import { useSettingStore } from '@/stores/settingStore.js'
import translate from './utils/translate'
import Trans from '@/lang/translation'
router.beforeEach(async (to, from, next) => {
  // translate document title
  const lang = localStorage.getItem('locale')

  await Trans.switchLanguages(lang)
  const title = translate(`header.${to.name}`)
  document.title = getPageTitle(title)
  // change darkmode
  const settingStore = useSettingStore()
  settingStore.setDarkMode()
  // check active language
  settingStore.activeLang = lang

  next()
})

router.afterEach(() => {
  // finish progress bar
})
