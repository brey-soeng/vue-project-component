import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'

const defaultState = {
  isCollapMenu: true,
  menuWidth: '320',
  themeMode: false,
  transition: 'slide'
}
export const useSettingStore = defineStore('settingStore', {
  state: () => cloneDeep(defaultState),
  mutations: {
    RESET_STATE() {
      Object.assign(this, cloneDeep(defaultState))
    },

    SET_COLLAPED_MENU(state, data) {
      state.isCollapMenu = data
    }
  },
  actions: {
    // setup darkmode
    setDarkMode() {
      this.themeMode = localStorage.theme === 'dark' ? true : false
      if (this.themeMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
})
