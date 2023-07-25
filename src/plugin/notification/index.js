import notify from '@/components/VToast.vue'
import service from './services'

notify.install = (app, options = {}) => {
  let plugin = service(options)
  app.$notify = plugin
  app.config.globalProperties.$notify = plugin
}

export default notify
export { notify, service }
