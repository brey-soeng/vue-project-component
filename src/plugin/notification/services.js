import toast from '@/components/VToast.vue'
import elements from '@/plugin/notification/component'
import events from '@/plugin/notification/event'

const service = (globalOptions = {}) => {
  return {
    show(message, options = {}) {
      return elements.mountElement(toast, {
        props: { ...globalOptions, ...{ message, ...options } }
      })
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
    },
    clear() {
      events.$emit('toast-clear')
    }
  }
}

export default service
