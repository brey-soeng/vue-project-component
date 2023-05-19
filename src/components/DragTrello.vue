<template>
  <div class="bg-default-100 rounded">
    <div class="py-3 px-2 bg-dark-700 text-center text-white first-letter:capitalize rounded-t">
      <h1>header</h1>
    </div>
    <div class="py-2 px-2">
      <draggable
        class="list-group"
        v-model="arrayList"
        :group="props.group"
        @start="props.drag"
        @end="props.drag"
        :sort="props.sort"
        item-key="name"
      >
        <template #item="{ element }">
          <div
            class="py-2 cursor-move mt-2 px-2 bg-white text-primary-800 first-letter:capitalize rounded shadow-md transition-all duration-500 delay-300"
          >
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
const props = defineProps({
  lists: {
    type: [Array, Object],
    default() {
      return []
    }
  },
  drag: {
    type: Boolean,
    default: false
  },
  group: {
    type: String,
    default: 'people'
  },
  sort: {
    type: Boolean,
    default: false
  }
})
const arrayList = ref(props.lists)
</script>
