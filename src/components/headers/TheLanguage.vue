<template>
  <div>
    <tool-tip position="bottom" :tooltipText="'Languages'">
      <button
        @click="handleClick"
        v-click-outside="handleClickOutside"
        v-ripple
        class="ripple-class"
      >
        <div
          class="p-2 flex justify-center items-center rounded-full hover:text-secondary-900 active:bg-primary-600 active:text-white hover:bg-default-100 hover:opacity-70 hover:dark:bg-secondary-700 hover:dark:opacity-70 hover:dark:text-white"
        >
          <LanguageIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
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
      <div v-resize="onResize">
        <ul
          v-if="visible"
          :class="windowSize.x <= 700 ? 'left-0' : 'right-0'"
          class="list-none px-2 translate-x-0 py-2 border-default-200 dark:bg-dark dark:text-white mt-2 dark:border-default-500 p-0 absolute ease-in-out duration-300 w-52 bg-white text-default-500 border rounded"
        >
          <template v-for="(language, index) in supportedLocales" :key="`locale-${language}`">
            <li
              @click="switchLanguage(language, index)"
              :class="{
                ' bg-primary-600 text-white bg-opacity-70': settingStore.activeLang === language
              }"
              class="flex mb-1 cursor-pointer flex-wrap justify-start items-center py-2 px-2 text-default-500 dark:text-default-300 hover:dark:bg-primary-800 hover:dark:text-primary-500 hover:text-primary-500 hover:dark:bg-opacity-10 rounded-md hover:bg-primary-800 hover:bg-opacity-10"
            >
              {{ t(`locale.${language}`) }}
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Trans from '@/lang/translation'
import { useRouter } from 'vue-router'
import { LanguageIcon } from '@heroicons/vue/24/outline'
import { useSettingStore } from '@/stores/settingStore.js'
const settingStore = useSettingStore()
const visible = ref(false)
const handleClick = () => {
  visible.value = !visible.value
}
const handleClickOutside = () => {
  visible.value = false
}

onMounted(() => {
  onResize()
})

const windowSize = ref({ x: 0, y: 0 })
const onResize = () => {
  windowSize.value = { x: window.innerWidth, y: window.innerHeight }
}

const { t } = useI18n()
const router = useRouter()
const newLocale = ref('')
const switchLanguage = async (language) => {
  newLocale.value = language
  console.log(newLocale.value)
  await Trans.switchLanguages(newLocale.value)
  try {
    await router.replace({ params: { locale: newLocale.value } })
  } catch (e) {
    router.push('/')
  }
}

const supportedLocales = Trans.supportedLocales
</script>
