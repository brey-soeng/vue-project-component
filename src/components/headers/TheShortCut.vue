<template>
  <div>
    <tool-tip position="bottom" :tooltipText="'Shortcut'">
      <button
        @click="handleClick"
        v-click-outside="handleClickOutside"
        v-ripple
        class="p-2 flex justify-center ripple-class items-center rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
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
        class="list-none border-default-200 dark:bg-dark dark:text-white mt-2 dark:border-default-500 p-0 absolute right-0 z-10 ease-in-out duration-300 w-96 bg-white text-default-500 border rounded"
      >
        <div
          class="py-4 px-3 flex justify-between items-center border-b border-default-200 dark:border-default-500"
        >
          <h1 class="text-lg first-letter:capitalize font-semibold text-default-400">Shortcut</h1>
          <button
            @click="handleClick"
            v-ripple
            class="p-2 flex justify-center ripple-class items-center rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
          >
            <SquaresPlusIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
          </button>
        </div>
        <div class="grid grid-cols-2">
          <div
            class="border-r border-default-200 dark:border-default-500 py-3 px-3 flex justify-center items-center"
          >
            hello world
          </div>
          <div class="py-3 px-3 flex justify-center items-center">hello world</div>
        </div>
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
