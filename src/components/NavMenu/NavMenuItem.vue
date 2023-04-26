<template>
  <li>
    <ul role="list" class="-mx-2 space-y-1">
      <li>
        <RouterLink
          v-if="!item?.children"
          :to="item?.path"
          :class="[
            item?.meta?.current ? 'bg-gray-50' : 'hover:bg-gray-50',
            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700'
          ]"
        >
          <SvgIcon :name="item?.meta?.icon" />
          {{ item?.meta?.title }}
        </RouterLink>
        <Disclosure as="div" v-else v-slot="{ open }">
          <DisclosureButton
            :class="[
              item?.meta?.current ? 'bg-gray-50' : 'hover:bg-gray-50',
              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
            ]"
          >
            <SvgIcon :name="item?.meta?.icon" />
            {{ item.name }}
            <ChevronRightIcon
              :class="[
                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                'ml-auto h-5 w-5 shrink-0'
              ]"
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel v-if="item.children" as="ul" class="mt-1 px-2">
            <nav-menu-item v-for="subItem in item.children" :items="subItem" :key="subItem.name" />
          </DisclosurePanel>
        </Disclosure>
      </li>
    </ul>
  </li>
</template>
<script setup>
import { ref } from 'vue'
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
  }
})
const item = ref(props.items)
</script>
