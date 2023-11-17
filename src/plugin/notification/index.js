import service from './services'
const NotifyPlugin = {
  install(app, options = {}) {
    let plugin = service(options)
    app.$notify = plugin
    app.config.globalProperties.$notify = plugin
  }
}
console.log(NotifyPlugin)
export default NotifyPlugin
