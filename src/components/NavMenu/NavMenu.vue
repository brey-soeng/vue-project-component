<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-secondary-900 px-6">
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col">
        <NavMenuItem
          v-for="items in navigation"
          :items="items"
          :key="items.name"
          :indent="indent"
        />
      </ul>
    </nav>
  </div>
</template>
<script setup>
import NavMenuItem from './NavMenuItem.vue'
import { ref } from 'vue'
const props = defineProps({
  menuList: {
    type: [Object, Array],
    default() {
      return []
    }
  },
  indent: {
    type: [String, Number],
    default: '0'
  }
})
const navigation = ref(props.menuList)
</script>
