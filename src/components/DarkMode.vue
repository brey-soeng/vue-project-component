<template>
  <div>
    <button
      @click="handleSwitchDarkMode"
      class="py-2 px-2 border border-gray-100 rounded first-letter:capitalize"
    >
      {{ themeMode ? 'dark' : 'light' }}
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const themeMode = ref(false)
const handleSwitchDarkMode = () => {
  localStorage.theme = themeMode.value ? 'dark' : 'light'
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  themeMode.value = !themeMode.value
}
</script>
