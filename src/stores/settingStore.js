import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'

const defaultState = {
  themeMode: false
}
export const useSettingStore = defineStore('settingStore', {
  state: () => cloneDeep(defaultState),
  actions: {
    RESET_STATE() {
      Object.assign(this, cloneDeep(defaultState))
    }
  }
})
