import { createApp } from 'vue'
import Notification from '../components/GlobalNotification.vue'
export default {
  install: (app) => {
    const defaultOption = {}
    const notifyEle = {
      instance: null,
      option: {},
      show(option) {
        const _option = { ...defaultOption, ...option }
        // Create a new div element to mount the GlobalNotification component
        const notifyContainer = document.createElement('div')
        document.body.appendChild(notifyContainer)

        // Mount the GlobalNotification component to the new element
        this.instance = createApp({ extends: Notification }, { ..._option })
        if (!this.instance) return
        this.instance.mount(notifyContainer)
        this.instance.title = _option.title
        this.instance.message = _option.message
        this.instance.direct = _option.direct
        this.instance.position = _option.position
        this.instance.duration = _option.duration
        this.instance.type = _option.type
        this.instance.id = _option.id
      }
    }
    app.provide('notify', notifyEle)
    app.config.globalProperties.$notify = notifyEle
  }
}
