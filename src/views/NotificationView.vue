<template>
  <div class="relative">
    <!-- <VNotification title="hello world" /> -->
    <button class="py-2 px-2 rounded bg-primary-500 text-white" @click="handleNotification">
      Notification
    </button>
  </div>
</template>
<script setup>
import { onMounted, inject } from 'vue'
const notify = inject('notify')
// const toast = inject('toast')
onMounted(() => {})
const handleNotification = () => {
  // toast.show({
  //   message: 'Hello world',
  //   type: 'success',
  //   title: 'testing'
  // })
  // console.log(toast)
  notify.show({
    type: 'success',
    title: 'Testing',
    message: `This discovery successfully updated`,
    duration: 3000,
    direct: true,
    position: 'top'
  })
}
</script>
