<template>
  <div
    class="py-4 px-4 bg-white text-default-700 sticky top-0 z-10 shadow dark:bg-dark dark:text-white"
  >
    <div class="flex justify-between items-center">
      <div class="flex justify-start items-center flex-wrap gap-3 text-white">
        <button
          v-tooltip:bottom.tooltip="'Collape'"
          @click="handleCollapeMenu"
          class="cursor-pointer p-2 flex justify-center items-center hover:dark:translate-0 hover:dark:translate-y-0 duration-75 rounded-full dark:text-default-300 text-secondary-900 hover:text-secondary-900 hover:bg-default-100 hover:opacity-70 active:bg-primary-700 active:text-white hover:dark:bg-secondary-700 hover:dark:opacity-70 hover:dark:text-white"
        >
          <svg-icon
            name="Adjustment"
            stroke-width="1.5"
            :class="settings.isCollapMenu ? 'rotate-180' : ''"
          />
        </button>
      </div>
      <div class="flex justify-end gap-x-3 items-center">
        <dark-mode />
        <ScreenFull />
        <TheProfile />
      </div>
    </div>
  </div>
</template>
<script setup>
import { TheProfile } from './index'
import { useSettingStore } from '@/stores/settingStore'
const settings = useSettingStore()
// import { RouterLink } from 'vue-router'
// import Trans from '@/lang/translation'

const handleCollapeMenu = () => {
  settings.isCollapMenu = !settings.isCollapMenu
  settings.menuWidth = !settings.isCollapMenu ? '80' : '320'
}
</script>
