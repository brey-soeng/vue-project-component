import toast from '@/components/VToast.vue'
import eventBus from './event'
import mount from './component'
const service = (globalOptions = {}) => {
  return {
    show(message, options = {}) {
      let localOptions = { message, ...options }
      const c = mount(toast, {
        props: { ...globalOptions, ...localOptions }
      })
      return c
    },
    clear() {
      eventBus.$emit('toast-clear')
    },
    success(message, options = {}) {
      options.type = 'success'
      return this.show(message, options)
    },
    error(message, options = {}) {
      options.type = 'error'
      return this.show(message, options)
    },
    info(message, options = {}) {
      options.type = 'info'
      return this.show(message, options)
    },
    warning(message, options = {}) {
      options.type = 'warning'
      return this.show(message, options)
    }
  }
}

export default service
