<template>
  <transition :name="transitionName">
    <div
      v-if="visible"
      :style="customStyle"
      class="fixed flex flex-wrap justify-center items-center cursor-pointer dark:text-black"
      @click="backToTop"
    >
      <svg-icon :name="iconName" :size="iconSize" :strokeWidth="iconStrokeWidth" />
    </div>
  </transition>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 300
  },
  backPosition: {
    type: Number,
    default: 0
  },
  transitionName: {
    type: String,
    default: 'fade'
  },
  width: {
    type: [String, Number],
    default: '50'
  },
  height: {
    type: [String, Number],
    default: '50'
  },
  right: {
    type: [String, Number],
    default: 50
  },
  bottom: {
    type: [String, Number],
    default: 50
  },
  background: {
    type: String,
    default: '#e7eaf1'
  },
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    Type: [String, Number],
    default: '24'
  },
  iconStrokeWidth: {
    type: [String, Number],
    default: 1
  },
  iconName: {
    type: String,
    default: 'Arrow'
  },
  rounded: {
    type: [String, Number],
    default: '50'
  }
})
const visible = ref(false)
const interval = ref(null)
const isMoving = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (interval.value) {
    clearInterval(interval.value)
  }
})

const customStyle = computed(() => {
  return {
    right: props.right + 'px',
    bottom: props.bottom + 'px',
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    color: props.iconColor,
    'border-radius': props.rounded + '%'
  }
})
const handleScroll = () => {
  visible.value = window.scrollY > props.visibilityHeight
}

const backToTop = () => {
  if (isMoving.value) {
    return
  }
  const start = window.scrollY
  let i = 0
  isMoving.value = true
  interval.value = setInterval(() => {
    const next = Math.floor(easeInOutQuad(10 * i, start, -start, 500))
    if (next <= props.backPosition) {
      window.scrollTo(0, props.backPosition)
      clearInterval(interval.value)
      isMoving.value = false
    } else {
      window.scrollTo(0, next)
    }
    i++
  }, 16.7)
}

const easeInOutQuad = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b
  return (-c / 2) * (--t * (t - 2) - 1) + b
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
