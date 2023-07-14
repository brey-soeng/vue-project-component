import service from './services'
const args = {}

const toast = (app) => {
  const methods = service(args)
  app.$toast = methods
  app.config.globalProperties.$toast = methods
}

export default { toast, service }
