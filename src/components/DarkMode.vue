<template>
  <tool-tip position="bottom" :tooltipText="settingStore.themeMode ? 'Dark' : 'Light'">
    <button
      v-ripple
      @click="switchwitchDarkMode"
      class="p-2 flex justify-center ripple-class items-center rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
    >
      <svg-icon name="Sun" v-if="settingStore.themeMode" class="h-5 w-5" />
      <svg-icon name="Moon" v-else class="h-5 w-5" />
    </button>
  </tool-tip>
</template>
<script setup>
import { useSettingStore } from '@/stores/settingStore.js'
const settingStore = useSettingStore()
const switchwitchDarkMode = () => {
  settingStore.themeMode = !settingStore.themeMode
  localStorage.theme = settingStore.themeMode ? 'dark' : 'light'
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
