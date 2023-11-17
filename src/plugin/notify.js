import { createApp } from 'vue'
import GlobalNotification from '../components/GlobalNotification.vue'

const NotifyPlugin = {
  install(app) {
    // Create a new div element to mount the GlobalNotification component
    const notifyContainer = document.createElement('div')
    document.body.appendChild(notifyContainer)

    // Mount the GlobalNotification component to the new element
    const vm = createApp(GlobalNotification)
    const notificationComponent = vm.mount(notifyContainer)

    // Create a show method on the Vue instance to trigger the notification
    app.config.globalProperties.$notify = {
      show(message, type = 'info', direct = true, position = 'top', duration = 3000) {
        notificationComponent.message = message
        notificationComponent.type = type
        notificationComponent.direct = direct
        notificationComponent.position = position
        notificationComponent.duration = duration
        notificationComponent.show = true
      }
    }

    console.log(app.config.globalProperties.$notify)
  }
}

export default NotifyPlugin
