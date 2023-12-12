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
        this.instance.showClose = _option.showClose
        this.instance.position = _option.position
        this.instance.duration = _option.duration
        this.instance.type = _option.type
        this.instance.id = _option.id
        this.instance.isDismiss = _option.isDismiss
        this.instance.btn_label_1 = _option.btn_label_1
        this.instance.btn_label_2 = _option.btn_label_2
        this.instance.loading = _option.loading

        const handleClose = () => {
          if (typeof _option.onHide === 'function') _option.onHide()
          this.instance = null
        }

        this.instance.onConfirm = _option.onConfirm
        this.instance.onUndo = _option.onUndo
        this.instance.onHide = handleClose()
      },
      hide() {
        if (!this.instance) return
        this.instance.handleHide()
      }
    }
    app.provide('notify', notifyEle)
    app.config.globalProperties.$notify = notifyEle
  }
}
