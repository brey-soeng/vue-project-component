<template>
  <component
    :is="dynamicComponent"
    :width="props.size"
    :height="props.size"
    :stroke-width="props.strokeWidth"
  />
</template>
<script setup>
import { computed, defineAsyncComponent } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  strokeWidth: {
    type: [String, Number],
    default: 1
  }
})
const dynamicComponent = computed(() => {
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1) + 'Icon'
  return defineAsyncComponent(() => import(`../icons/${name}.vue`))
})
</script>
