<template>
  <div>
    <tool-tip position="bottom" :tooltipText="'Shortcut'">
      <button
        @click="handleClick"
        v-click-outside="handleClickOutside"
        v-ripple
        class="p-2 flex justify-center ripple-class items-center rounded-full hover:text-secondary-900 active:bg-primary-600 active:text-white hover:bg-default-100 hover:opacity-70 hover:dark:bg-secondary-700 hover:dark:opacity-70 hover:dark:text-white"
      >
        <SquaresPlusIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
      </button>
    </tool-tip>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="visible"
        class="list-none border-default-200 dark:bg-dark dark:text-white mt-2 dark:border-default-500 p-0 absolute right-0 z-10 ease-in-out duration-300 w-56 bg-white text-default-500 border rounded"
      >
        Hello world
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { SquaresPlusIcon } from '@heroicons/vue/24/outline'
const visible = ref(false)
const handleClick = () => {
  visible.value = !visible.value
}
const handleClickOutside = () => {
  visible.value = false
}
</script>
