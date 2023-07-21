<template>
  <div>
    <tool-tip position="bottom" :tooltipText="'Notification'">
      <button
        @click="handleClick"
        v-click-outside="handleClickOutside"
        v-ripple
        class="ripple-class rounded-full"
      >
        <div
          class="p-2 relative flex justify-center items-center rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
        >
          <BellIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
          <span
            class="absolute flex justify-center items-center top-1 right-1 bg-danger-500 rounded-full text-white z-30 w-[18px] h-[18px] p-[2px] text-[8px]"
            >99</span
          >
        </div>
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
import { BellIcon } from '@heroicons/vue/24/outline'
const visible = ref(false)
const handleClick = () => {
  visible.value = !visible.value
}
const handleClickOutside = () => {
  visible.value = false
}
</script>
