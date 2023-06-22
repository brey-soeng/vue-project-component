<template>
  <div class="bg-main dark:bg-dark dark:text-default-400 dark:font-normal">
    <!-- <div class="absolute top-0 left-0 w-full bg-dark-300 z-10">hello topbar</div>
    <div class="absolute top-2 left-0 w-full bg-dark-600 py-3 z-10">navbar</div> -->
    <!-- body -->
    <div class="flex justify-start items-start">
      <div
        class="bg-white translate-x-0 ease-in-out duration-300 py-4 px-4 min-h-screen overflow-y-auto overflow-hidden border-r border-default-100"
        :style="`width:${collapedWidth}px`"
      >
        <TheSidebar />
      </div>
      <div
        id="elementId"
        class="w-full min-h-screen overflow-y-auto scrollbar-gatter ease-in-out duration-300"
        :style="{ height: 'calc(100vh - 64px)' }"
      >
        <TheNavbar />
        <div class="py-4 px-4">
          <AppMain />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSettingStore } from '@/stores/settingStore'
import { computed } from 'vue'
const settings = useSettingStore()
import { AppMain, TheSidebar, TheNavbar } from './components'
const collapedWidth = computed(() => {
  return settings.menuWidth
})
</script>
