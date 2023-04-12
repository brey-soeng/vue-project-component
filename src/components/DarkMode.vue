<template>
  <button @click="switchwitchDarkMode" class="p-2">
    <SunIcon v-if="settingStore.themeMode" class="h-6 w-6" />
    <MoonIcon v-else class="h-6 w-6" />
  </button>
</template>
<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
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
