<template>
  <transition :enter-active-class="transition.enter" :leave-active-class="transition.leave">
    <div
      v-show="isActive"
      :class="['c-toast', `c-toast--${props.type}`, `c-toast--${props.position}`]"
      @mouseover="toggleTimer(true)"
      @mouseleave="toggleTimer(false)"
      @click="click"
      role="alert"
      v-html="props.message"
    />
  </transition>
</template>

<script setup>
import removeElement from '@/plugin/notification/component'
import Timer from '@/plugin/notification/timer'
import Positions, { definePosition } from '@/plugin/notification/position'
import eventBus from '@/plugin/notification/event'
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'default'
  },
  position: {
    type: String,
    default: Positions.BOTTOM_RIGHT,
    validator(value) {
      return Object.values(Positions).includes(value)
    }
  },
  maxToasts: {
    type: [Number, Boolean],
    default: false
  },
  duration: {
    type: [Number, Boolean],
    default: 4000
  },
  dismissible: {
    type: Boolean,
    default: true
  },
  queue: {
    type: Boolean,
    default: false
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  useDefaultCss: {
    type: Boolean,
    default: true
  },
  onClose: {
    type: Function,
    default: () => {}
  },
  onClick: {
    type: Function,
    default: () => {}
  }
})

const isActive = ref(false)
const parentTop = ref(null)
const parentBottom = ref(null)
const timer = ref(null)
const queueTimer = ref(null)
onMounted(() => {
  showNotice()
  eventBus.$on('toast-clear', this.close)
})
onBeforeMount(() => {
  createParents()
  setDefaultCss()
  setupContainer()
})

onBeforeUnmount(() => {
  eventBus.$off('toast-clear', this.close)
})

const correctParent = computed(() => {
  return definePosition(props.position, parentTop.value, parentBottom.value)
})

const transition = computed(() => {
  return definePosition(
    props.position,
    {
      enter: 'fadeInDown',
      leave: 'fadeOut'
    },
    {
      enter: 'fadeInUp',
      leave: 'fadeOut'
    }
  )
})

const createParents = () => {
  parentTop.value = document.querySelector('.c-toast-container--top')
  parentBottom.value = document.querySelector('.c-toast-container--bottom')

  if (parentTop.value && parentBottom.value) return

  if (!parentTop.value) {
    parentTop.value = document.createElement('div')
    parentTop.value.className = 'c-toast-container c-toast-container--top'
  }

  if (!parentBottom.value) {
    parentBottom.value = document.createElement('div')
    parentBottom.value.className = 'c-toast-container c-toast-container--bottom'
  }
}
const setDefaultCss = () => {
  const type = props.useDefaultCss ? 'add' : 'remove'
  parentTop.value.classList[type]('v--default-css')
  parentBottom.value.classList[type]('v--default-css')
}
const setupContainer = () => {
  const container = document.body
  container.appendChild(parentTop.value)
  container.appendChild(parentBottom.value)
}
const shouldQueue = () => {
  if (!props.queue && props.maxToasts === false) {
    return false
  }

  if (props.maxToasts !== false) {
    return (
      props.maxToasts <= parentTop.value.childElementCount + parentBottom.value.childElementCount
    )
  }

  return parentTop.value.childElementCount > 0 || parentBottom.value.childElementCount > 0
}
const showNotice = () => {
  if (shouldQueue()) {
    queueTimer.value = setTimeout(showNotice(), 250)
    return
  }

  correctParent.value.insertAdjacentElement('afterbegin', this.$el)
  isActive.value = true

  timer.value = props.duration !== false ? new Timer(close(), props.duration) : null
}
const click = () => {
  // eslint-disable-next-line no-undef
  props.onClick.apply(null, arguments)

  if (props.dismissible) {
    close()
  }
}
const toggleTimer = (newVal) => {
  if (timer.value && props.pauseOnHover) {
    newVal ? timer.value.pause() : timer.value.resume()
  }
}
const stopTimer = () => {
  timer.value && timer.value.stop()
  clearTimeout(queueTimer.value)
}

const close = () => {
  stopTimer()
  isActive.value = false
  setTimeout(() => {
    // eslint-disable-next-line no-undef
    props.onClose.apply(null, arguments)
    removeElement(this.$el)
  }, 150)
}
</script>
