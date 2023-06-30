<template>
  <tool-tip position="bottom" :tooltipText="'Fullscreen'">
    <button
      v-ripple
      class="p-2 flex justify-center items-center rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
      @click="handleToggle"
    >
      <svg-icon class="cursor-pointer" :name="isFullscreen ? 'Pointin' : 'Pointout'" />
    </button>
  </tool-tip>
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
