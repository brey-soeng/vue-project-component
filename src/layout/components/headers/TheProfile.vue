<template>
  <div>
    <button class="rounded-full flex justify-center items-center relative">
      <img :src="avatar" alt="" class="w-9 h-9 rounded-full bg-cover" />
      <span
        class="w-3 h-3 border-2 border-white rounded-full absolute bottom-0 z-10 right-0 bg-success-500"
      ></span>
    </button>
  </div>
</template>
<script setup>
import avatar from '@/assets/img/avatar.png'
</script>
