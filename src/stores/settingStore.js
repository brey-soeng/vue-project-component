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
  actions: {}
})
