<template>
  <div class="grid grid-cols-2 gap-6 px-4 py-4">
    <DragTrello :lists="list1" />
    <DragTrello :lists="list2" :sort="true" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

const list1 = ref([
  { id: 1, name: 'sovan' },
  { id: 2, name: 'dara' }
])
const list2 = ref([
  { id: 1, name: 'Do do' },
  { id: 2, name: 'mikie' }
])
</script>
