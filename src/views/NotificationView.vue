<template>
  <div>
    <!-- <VNotification title="hello world" /> -->
    <button class="py-2 px-2 rounded bg-primary-500 text-white" @click="handleNotification">
      Notification
    </button>

    <GlobalNotification
      v-if="showNotification"
      :message="notificationMessage"
      :type="notificationType"
      :direct="false"
      position="top"
      :duration="3000"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const showNotification = ref(false)
const notificationMessage = ref('Hello, this is a notification!')
const notificationType = ref('success')

onMounted(() => {
  this.emitter.on('my-event', {
    showNotification: true,
    notificationMessage: notificationMessage.value,
    notificationType: notificationType.value
  })
})
const handleNotification = () => {
  this.emitter.emit('my-event', {
    showNotification: true,
    notificationMessage: notificationMessage.value,
    notificationType: notificationType.value
  })
}
</script>
