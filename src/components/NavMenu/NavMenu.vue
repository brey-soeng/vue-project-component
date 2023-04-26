<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
    <!-- add logo here -->
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col">
        <NavMenuItem v-for="items in navigation" :items="items" :key="items.name" />
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
  }
})
const navigation = ref(props.menuList)
</script>
