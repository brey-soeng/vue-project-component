<template>
  <li>
    <ul role="list" class="space-y-1">
      <li @click="handleClick(item)">
        <RouterLink
          v-if="!item?.children"
          :to="item?.path"
          :class="[
            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-default-500 dark:text-white hover:text-secondary-700  hover:bg-opacity-50 hover:dark:text-white hover:dark:text-opacity-80 hover:dark:bg-secondary-700 hover:dark:bg-opacity-50 hover:bg-default-100'
          ]"
        >
          <SvgIcon v-if="item?.meta?.icon" :name="item?.meta?.icon" />
          <span
            v-else
            :class="[
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[0.625rem] font-medium bg-white dark:bg-secondary-500 dark:bg-opacity-40 dark:text-white dark:border-0 uppercase'
            ]"
            >{{ item?.meta?.title.toString().charAt(0) }}</span
          >
          <span class="first-letter:capitalize">{{ item?.meta?.title }}</span>
        </RouterLink>
        <Disclosure as="div" v-else v-slot="{ open }">
          <DisclosureButton
            :class="[
              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 dark:text-white font-semibold text-default-500 hover:text-primary-700 hover:bg-opacity-50 hover:dark:text-white hover:dark:text-opacity-80 hover:dark:bg-secondary-700 hover:dark:bg-opacity-50 hover:bg-default-100'
            ]"
          >
            <SvgIcon v-if="item?.meta?.icon" :name="item?.meta?.icon" />
            <span
              v-else
              :class="[
                'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[0.625rem] font-medium bg-white dark:bg-secondary-500 dark:bg-opacity-40 dark:text-white dark:border-0 uppercase'
              ]"
              >{{ item?.meta?.title.toString().charAt(0) }}</span
            >
            <span class="first-letter:capitalize">{{ item?.meta?.title }}</span>
            <ChevronRightIcon
              :class="[
                open ? 'rotate-90 text-default-500' : 'text-default-400',
                'ml-auto h-5 w-5 shrink-0 dark:text-white'
              ]"
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel v-if="item?.children" as="ul" :style="indentStyle">
            <nav-menu-item
              v-for="subItem in item.children"
              :items="subItem"
              :key="subItem.name"
              :indent="indent"
            />
          </DisclosurePanel>
        </Disclosure>
      </li>
    </ul>
  </li>
</template>
<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
const props = defineProps({
  items: {
    type: [Object, Array],
    default() {
      return []
    }
  },
  indent: {
    type: [String, Number],
    default: ''
  }
})
const indentStyle = computed(() => {
  return {
    'padding-left': props.indent + 'rem'
  }
})
const item = ref(props.items)
const handleClick = (item) => {
  if (item?.children) {
    return
  }
  console.log(item)
}
</script>
