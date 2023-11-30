import service from './services'
export default {
  install: (app, options = {}) => {
    let plugin = service(options)
    app.$toast = plugin
    app.provide('toast', plugin)
    app.config.globalProperties.$toast = plugin
  }
}
