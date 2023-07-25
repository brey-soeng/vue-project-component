<template>
  <div>
    <!-- <VNotification title="hello world" /> -->
    <button class="py-2 px-2 rounded bg-primary-500 text-white" @click="handleNotification">
      Notification
    </button>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
const handleNotification = () => {
  this.$notify('This is a success notification.', 'success')
}
</script>
