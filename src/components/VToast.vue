<template>
  <div
    :class="style + shade + animation"
    @click="click"
    @mouseover="toggleTimer(true)"
    @mouseleave="toggleTimer(false)"
    role="alert"
  >
    <div class="px-4 py-4 flex justify-between items-start text-lg">
      {{ message }}
    </div>
  </div>
</template>
<script setup>
import Timer from '@/plugin/notification/timer'
import events from '@/plugin/notification/event'
import elements from '@/plugin/notification/component'
import { ref, computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'
const props = defineProps({
  message: {
    type: String,
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
})

const state = ref({
  parent: null,
  timer: null,
  queueTimer: null,
  transition: 'toast-in'
})

const animation = computed(() => {
  return ' animation-' + state.value.transition
})

const style = computed(() => {
  return 'flex self-end overflow-hidden rounded-xl cursor-pointer shadow-xl mb-5 pointer-events-auto'
})
const shade = computed(() => {
  switch (props.type) {
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
})
onMounted(() => {
  notify()
  events.$on('toast-clean', close)
})

onBeforeMount(() => {
  createParent()
  setupContainer()
})

onBeforeUnmount(() => {
  events.$off('toast-clear', close)
})

const createParent = () => {
  state.value.parent = document.getElementById('_toast_container')
  if (!state.value.parent) {
    state.value.parent = document.createElement('div')
    state.value.parent.id = '_toast_container'
    state.value.parent.className =
      'fixed flex flex-col-reverse w-full h-full inset-0 p-10 z-50 pointer-events-none overflow-hidden'
  }
}
const setupContainer = () => {
  const container = document.body
  container.appendChild(state.value.parent)
}
const shouldNotify = () => {
  if (props.maxToasts !== false) {
    return props.maxToasts <= state.value.parent.childElementCount
  }

  return !props.maxToasts
}
const notify = () => {
  if (shouldNotify()) {
    state.value.queueTimer = setTimeout(notify, 250)
    return
  }

  state.value.parent.insertAdjacentElement('afterbegin', this.$el)
  state.value.timer = new Timer(close, props.delay)
}
const click = () => {
  close()
}
const toggleTimer = (state) => {
  if (state.value.timer) {
    state ? state.value.timer.pause() : state.value.timer.resume()
  }
}
const close = () => {
  state.value.timer && state.value.timer.stop()
  clearTimeout(state.value.queueTimer)
  state.value.transition = 'toast-out'

  setTimeout(() => {
    elements.removeElement(this.$el)
  }, 250)
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
