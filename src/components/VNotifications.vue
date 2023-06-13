<template>
  <div
    aria-live="assertive"
    class="pointer-events-none z-20 fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="props.visible"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-success-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
                <p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="show = false"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  visible: { type: Boolean, default: true },
  title: { type: String, default: 'Success saved!' },
  message: { type: String, default: 'Anyone with a link can now view this file' },
  position: {
    type: String,
    default: () => 'top-right',
    validator: (value) => {
      return [
        'right-center',
        'right-bottom',
        'top-left',
        'top-center',
        'left-center',
        'left-bottom',
        'bottom-center'
      ].includes(value)
    }
  },
  type: {
    type: String,
    default: () => 'default',
    validator: (value) => {
      return ['success', 'warning', 'error', 'primary'].includes(value)
    }
  },
  avatar: {
    type: String,
    default: ''
  },
  dimiss: {
    type: Boolean,
    default: false
  },
  duration: {
    type: [Number, String],
    default: 3000
  }
})
const show = ref(true)
</script>