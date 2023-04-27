<template>
  <button
    class="py-2 px-2 border border-gray-200 bg-primary-600 text-white rounded first-letter:capitalize"
    @click="handleClick"
  >
    click me
  </button>
  <drawer-slide
    :open="open"
    @close="open = false"
    title="Drawer title"
    isOverlay
    stickyHeader
    stickyFooter
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, rem, aspernatur at veniam
      excepturi neque nulla similique quia laudantium omnis voluptatibus. Voluptas, cupiditate?
      Error officia distinctio asperiores pariatur dolorum eius.
    </p>
  </drawer-slide>
</template>
<script setup>
import { ref } from 'vue'
const open = ref(false)
const handleClick = () => {
  open.value = true
}
</script>
