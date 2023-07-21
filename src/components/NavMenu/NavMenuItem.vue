<template>
  <ul role="list" class="space-y-1">
    <template v-for="(list, index) in listItem" :key="index">
      <li @click="handleClick(list, index)">
        <RouterLink
          v-if="!list?.children"
          :to="list?.path"
          :class="[
            list?.meta?.current
              ? 'bg-default-100 text-secondary-700  dark:bg-secondary-700  dark:bg-opacity-50'
              : 'text-default-700',
            'group  flex gap-x-3 rounded-md p-2  text-sm leading-6 font-semibold  dark:text-white hover:text-secondary-700  hover:bg-opacity-50 hover:dark:text-white hover:dark:text-opacity-80 hover:dark:bg-secondary-700 hover:dark:bg-opacity-50 hover:bg-default-100'
          ]"
        >
          <SvgIcon v-if="list?.meta?.icon" :name="list?.meta?.icon" />
          <span
            v-else
            :class="[
              'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[0.625rem] font-medium bg-white dark:bg-secondary-500 dark:bg-opacity-40 dark:text-white dark:border-0 uppercase'
            ]"
            >{{ list?.meta?.title.toString().charAt(0) }}</span
          >
          <span class="first-letter:capitalize">{{ list?.meta?.title }}</span>
        </RouterLink>
        <Disclosure as="div" v-else v-slot="{ open }">
          <DisclosureButton
            :class="[
              open ? 'text-secondary-700' : 'text-default-700 ',
              'flex items-center w-full text-red text-left rounded-md p-2 gap-x-3 text-sm leading-6 dark:text-white font-semibold  hover:text-primary-700 hover:bg-opacity-50 hover:dark:text-white hover:dark:text-opacity-80 hover:dark:bg-secondary-700 hover:dark:bg-opacity-50 hover:bg-default-100'
            ]"
          >
            <SvgIcon v-if="list?.meta?.icon" :name="list?.meta?.icon" />
            <span
              v-else
              :class="[
                'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[0.625rem] font-medium bg-white dark:bg-secondary-500 dark:bg-opacity-40 dark:text-white dark:border-0 uppercase'
              ]"
              >{{ list?.meta?.title.toString().charAt(0) }}</span
            >
            <span class="first-letter:capitalize">{{ list?.meta?.title }}</span>
            <ChevronRightIcon
              :class="[
                open ? 'rotate-90 text-default-500' : 'text-default-400',
                'ml-auto h-5 w-5 shrink-0 dark:text-white'
              ]"
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel
            v-if="list?.children && list?.children.length"
            as="ul"
            :style="indentStyle"
          >
            <nav-menu-item :items="list?.children" :indent="indent" />
          </DisclosurePanel>
        </Disclosure>
      </li>
    </template>
  </ul>
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

const listItem = ref(props.items)
const isActive = ref(false)
const handleClick = (item, index) => {
  isActive.value = !item.meta.current
  listItem.value = listItem.value.map((x, _index) => {
    if (!x.children && index === _index) {
      return { ...x, meta: { ...x.meta, current: isActive.value } }
    } else {
      return { ...x, meta: { ...x.meta, current: false } }
    }
  })
  console.log(listItem.value)
}
</script>
