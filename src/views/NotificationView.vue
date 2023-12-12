<template>
  <div class="relative">
    <!-- <VNotification title="hello world" /> -->
    <button class="py-2 px-2 rounded bg-primary-500 text-white" @click="handleNotification">
      Notification
    </button>
  </div>
</template>
<script setup>
import { onMounted, inject, ref } from 'vue'
const notify = inject('notify')
const isLoading = ref(false)

onMounted(() => {})
const handleNotification = () => {
  notify.show({
    type: 'success',
    title: 'Save Success!',
    message: `This discovery successfully updated`,
    duration: 3000,
    position: 'top',
    isDismiss: true,
    btn_label_2: 'confirm',
    btn_label_1: 'cancel',
    loading: isLoading,
    onUndo: handleUndo,
    onConfirm: handleConfirm
  })
}
const handleUndo = () => {
  isLoading.value = true
  console.log('Hello undo')
}
const handleConfirm = () => {
  isLoading.value = true
  console.log('hello confirm')
}
</script>
