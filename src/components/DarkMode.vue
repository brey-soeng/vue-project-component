<template>
  <tool-tip position="bottom" :tooltipText="settingStore.themeMode ? 'Dark' : 'Light'">
    <button
      v-ripple
      @click="switchwitchDarkMode"
      class="p-2 flex justify-center ripple-class items-center rounded-full hover:text-secondary-900 active:bg-primary-600 active:text-white hover:bg-default-100 hover:opacity-70 hover:dark:bg-secondary-700 hover:dark:opacity-70 hover:dark:text-white"
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
