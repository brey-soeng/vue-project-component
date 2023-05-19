<script setup>
import { onMounted, ref } from 'vue'
onMounted(() => {
  onResize()
})
const windowSize = ref({ x: 0, y: 0 })
const onResize = () => {
  windowSize.value = { x: window.innerWidth, y: window.innerHeight }
}
</script>

<template>
  <main>
    <div class="text-red-500">Home</div>
    <switch-language />
    <svg-icon name="Home" size="100" />

    <div v-resize="onResize">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel quae illo corporis
        reprehenderit sapiente temporibus pariatur reiciendis, molestias nam suscipit, consectetur
        rerum quas aut neque iste magni explicabo repellendus.
      </p>
      {{ windowSize }}
    </div>
  </main>
</template>
