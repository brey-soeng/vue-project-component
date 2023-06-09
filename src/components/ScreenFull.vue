<template>
  <button
    v-tooltip:bottom.tooltip="'Fullscreen'"
    class="p-2 flex justify-center items-center rounded-full hover:text-secondary-900 hover:bg-default-100 hover:opacity-70 active:bg-primary-600 active:text-white hover:dark:bg-secondary-700 hover:dark:opacity-70 dark:text-default-300 hover:dark:text-white"
    @click="handleToggle"
  >
    <svg-icon class="cursor-pointer" :name="isFullscreen ? 'Pointin' : 'Pointout'" />
  </button>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import screenfull from 'screenfull'
const isFullscreen = ref(false)

onMounted(() => {
  init()
})
onBeforeUnmount(() => {
  destroy()
})

const handleToggle = () => {
  if (!screenfull.isEnabled) {
    // this.$message({
    //   message: 'you browser can not work',
    //   type: 'warning'
    // })
    return false
  }
  isFullscreen.value = !isFullscreen.value
  screenfull.toggle()
}
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

const init = () => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change())
  }
}

const destroy = () => {
  if (screenfull.isEnabled) {
    screenfull.off('change', change())
  }
}
</script>
