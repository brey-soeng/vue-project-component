<template>
  <div
    v-if="show"
    :class="notificationClasses"
    @click="hideNotification"
    class="py-2 px-2 bg-primary-800 rounded"
  >
    <p class="text-white">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  direct: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: 'top'
  },
  duration: {
    type: [String, Number],
    default: 30000
  }
})

const show = ref(true)

// Compute the appropriate notification classes based on the provided type and position
const notificationClasses = () => {
  // Define your Tailwind CSS classes for different types of notifications (e.g., success, error, info, etc.)
  const typeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }

  // Define your Tailwind CSS classes for different notification positions (e.g., top, bottom, left, right, etc.)
  const positionClasses = {
    top: 'top-4',
    bottom: 'bottom-4',
    left: 'left-4',
    right: 'right-4'
  }

  return [
    'fixed',
    'p-4',
    'rounded-md',
    'text-white',
    'font-medium',
    typeClasses[props.type] || 'bg-gray-500', // Default to gray background for unknown types
    positionClasses[props.position] || 'top-4' // Default to top position if none provided
  ]
}

// Automatically hide the notification after the specified duration (in milliseconds)
if (props.duration && !props.direct) {
  setTimeout(() => {
    show.value = false
  }, props.duration)
}

// Method to hide the notification on click
const hideNotification = () => {
  show.value = false
}
</script>
