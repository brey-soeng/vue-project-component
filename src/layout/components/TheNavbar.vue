<template>
  <div
    class="py-4 px-4 bg-white text-default-700 sticky top-0 z-10 shadow dark:bg-dark dark:text-white"
  >
    <div class="flex justify-between items-center">
      <div class="flex justify-start items-center flex-wrap gap-3 text-white">
        <tool-tip position="bottom" :tooltipText="'Collape'">
          <button
            @click="handleCollapeMenu"
            v-ripple
            class="ripple-class cursor-pointer p-2 flex justify-center items-center hover:dark:translate-0 hover:dark:translate-y-0 duration-75 rounded-full text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 hover:bg-primary-800 hover:bg-opacity-10"
          >
            <svg-icon
              name="Adjustment"
              stroke-width="1.5"
              :class="settings.isCollapMenu ? 'rotate-180' : ''"
            />
          </button>
        </tool-tip>
      </div>
      <div class="flex justify-end gap-x-3 items-center">
        <TheLanguage />
        <TheDardmode />
        <ScreenFull />
        <TheShortCut />
        <TheNotification />
        <TheProfile />
      </div>
    </div>
  </div>
</template>
<script setup>
import { TheProfile, TheShortCut, TheNotification, TheLanguage, TheDardmode } from './index'
import { useSettingStore } from '@/stores/settingStore'
const settings = useSettingStore()
// import { RouterLink } from 'vue-router'
// import Trans from '@/lang/translation'

const handleCollapeMenu = () => {
  settings.isCollapMenu = !settings.isCollapMenu
  settings.menuWidth = !settings.isCollapMenu ? '80' : '320'
}
</script>
