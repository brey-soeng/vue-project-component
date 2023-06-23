import { cloneDeep } from 'lodash'
import { defineStore } from 'pinia'

const defaultState = {}
export const useNotificationStore = defineStore('notificationStore', {
  state: () => cloneDeep(defaultState),
  mutations: {
    RESET_STATE() {
      Object.assign(this, cloneDeep(defaultState))
    }
  },
  actions: {}
})
