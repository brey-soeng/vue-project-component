<template>
  <div
    :class="style + shade + animation"
    @click="click"
    @mouseover="toggleTimer(true)"
    @mouseleave="toggleTimer(false)"
    role="alert"
  >
    <div class="px-4 py-4 flex justify-between items-start text-lg">
      {{ message.title }}
    </div>
  </div>
</template>
<script>
import Timer from '@/plugin/notification/timer'
import events from '@/plugin/notification/event'
import elements from '@/plugin/notification/component'
export default {
  props: {
    message: {
      type: [String, Object],
      required: true
    },
    type: {
      type: String,
      default: 'default'
    },
    delay: {
      type: Number,
      default: 4000
    },
    maxToasts: {
      type: [Number, Boolean],
      default: 5
    }
  },
  computed: {
    animation() {
      return 'animation-' + this.state.transition
    },
    style() {
      return 'flex self-end overflow-hidden rounded-xl cursor-pointer shadow-xl mb-5 pointer-events-auto'
    },
    shade() {
      switch (this.type) {
        case 'info':
          return ' bg-blue-500 border-2 border-blue-600 text-white'
        case 'warning':
          return ' bg-orange-600 border-2 border-orange-600 text-white'
        case 'success':
          return ' bg-green-600 border-2 border-green-600 text-white'
        case 'error':
          return ' bg-red-500 border-2 border-red-600 text-white'
        default:
          return ' bg-gray-50 border-2 border-gray-200'
      }
    }
  },
  mounted() {
    this.notify()
    events.$on('toast-clean', close)
  },
  data() {
    return {
      state: {
        parent: null,
        timer: null,
        queueTimer: null,
        transition: 'toast-in'
      }
    }
  },
  beforeMount() {
    this.createParent()
    this.setupContainer()
  },
  beforeUnmount() {
    events.$off('toast-clear', close)
  },
  methods: {
    createParent() {
      this.state.parent = document.getElementById('elementId')
      if (!this.state.parent) {
        this.state.parent = document.createElement('div')
        this.state.parent.id = 'elementId'
        this.state.parent.className =
          'fixed flex flex-col-reverse w-full h-full inset-0 p-10 z-50 pointer-events-none overflow-hidden'
      }
    },
    setupContainer() {
      const container = document.body
      container.appendChild(this.state.parent)
    },
    shouldNotify() {
      if (this.maxToasts !== false) {
        return this.maxToasts <= this.state.parent.childElementCount
      }

      return !this.maxToasts
    },
    notify() {
      if (this.shouldNotify()) {
        this.state.queueTimer = setTimeout(this.notify, 250)
        return
      }

      this.state.parent.insertAdjacentElement('afterbegin', this.$el)
      this.state.timer = new Timer(close, this.delay)
    },
    click() {
      close()
    },
    toggleTimer(state) {
      if (state.timer) {
        state ? state.timer.pause() : state.timer.resume()
      }
    },
    close() {
      this.state.timer && this.state.timer.stop()
      clearTimeout(this.state.queueTimer)
      this.state.transition = 'toast-out'
      setTimeout(() => {
        elements.removeElement(this.$el)
      }, 250)
    }
  }
}
</script>

<style>
.animation-toast-in {
  -webkit-animation: slide-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation: slide-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animation-toast-out {
  -webkit-animation: fade-out 0.2s ease-out both;
  animation: fade-out 0.2s ease-out both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(60px);
    transform: translateY(60px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(60px);
    transform: translateY(60px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
