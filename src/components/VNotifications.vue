<template>
  <div class="pointer-events-none z-50 fixed w-full px-4 py-4" :class="[positionClass.addClass]">
    <div class="w-full" :class="[positionClass.childrenClass]">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon class="h-6 w-6 text-success-600" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <h1 v-if="props.title" class="text-sm font-medium text-gray-900">
                  {{ props.title }}
                </h1>
                <div class="text-sm text-gray-500 break-all" v-html="props.message" />
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
import { computed, ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'
const props = defineProps({
  visible: { type: Boolean, default: true },
  title: { type: String, default: 'Success saved!' },
  message: {
    type: String,
    default: 'Anyone with a link can now view this file'
  },
  position: {
    type: [String, Array],
    default: () => 'top-right',
    validator: (value) => {
      return [
        'right-center',
        'right-bottom',
        'top-left',
        'top-center',
        'left-center',
        'bottom-left',
        'bottom-center',
        'top-right'
      ].includes(value)
    }
  },
  type: {
    type: String,
    default: () => 'default',
    validator: (value) => {
      return ['success', 'warning', 'error', 'primary', 'default'].includes(value)
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
  iconName: {
    type: String,
    default: ''
  },

  iconSize: {
    type: [String, Number],
    default: '14'
  },
  iconStroke: {
    type: [Number, String],
    default: 1
  },
  duration: {
    type: [Number, String],
    default: 3000
  },
  isBorder: {
    type: Boolean,
    default: false
  },
  border: {
    type: String,
    default: () => 'right',
    validator: (value) => {
      return ['left', 'bottom', 'top', 'right'].includes(value)
    }
  },
  outline: {
    type: Boolean,
    default: false
  }
})
const positionClass = computed(() => {
  let addClass = ''
  let childrenClass = ''
  switch (props.position) {
    case 'top-right':
      childrenClass = 'justify-end items-center flex'
      addClass = 'top-0 right-0'
      break
    case 'top-left':
      childrenClass = 'justify-start items-start flex'
      addClass = 'left-0 top-[60px]'
      break
    case 'right-bottom':
      childrenClass = 'justify-end items-end flex'
      addClass = 'bottom-0 right-0'
      break
    case 'bottom-left':
      childrenClass = 'justify-start items-start flex'
      addClass = 'bottom-0 left-0'
      break
    case 'bottom-center':
      childrenClass = 'flex justify-center'
      addClass = 'bottom-0'
      break
    // case 'right-center':
    //   childrenClass = 'flex'
    //   addClass = 'top-1/2 justify-end flex'
    //   break
    default:
      break
  }
  return { addClass, childrenClass }
})
const show = ref(props.visible)
</script>
