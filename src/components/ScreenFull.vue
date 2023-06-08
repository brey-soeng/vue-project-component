<template>
  <div>
    <svg-icon
      class="cursor-pointer"
      :name="isFullscreen ? 'Pointin' : 'Pointout'"
      @click="handleToggle"
    />
  </div>
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
