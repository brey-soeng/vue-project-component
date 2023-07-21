<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-secondary-900 px-6">
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col">
        <li>
          <NavMenuItem :items="navigation" :indent="indent" />
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import NavMenuItem from './NavMenuItem.vue'
import { ref, watch } from 'vue'
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
watch(props.menuList, (value) => {
  navigation.value = value
})
const navigation = ref(props.menuList)
</script>
