<template>
  <button
    class="py-2 px-2 border border-gray-200 bg-primary-600 text-white rounded first-letter:capitalize"
    @click="handleClick"
  >
    click me
  </button>
  <br />

  <button v-tooltip:right.tooltip="'texting'" class="px-1 py-1 rounded bg-primary-500 text-white">
    Tooltip on top
  </button>
  <br />
  <tool-tip position="bottom" :tooltipText="'custom text'"
    ><button class="py-2 px-2 text-white bg-primary-500 rounded">
      Tooltip custom text
    </button></tool-tip
  >
  {{ scrollInvoked }}

  <div class="h-28 overflow-y-auto" id="scroll-target">
    <div v-scroll:#scroll-target="onScroll">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed aspernatur corrupti
        fugit maiores ipsam blanditiis impedit molestiae voluptas nulla nobis, illo, tempora nemo
        rem esse nam autem placeat obcaecati.
      </p>
    </div>
  </div>

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
const scrollInvoked = ref(0)
const onScroll = (e) => {
  scrollInvoked.value = e.target.scrollTop
}
</script>
