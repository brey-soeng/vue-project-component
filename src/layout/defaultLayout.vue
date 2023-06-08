<template>
  <div class="relative">
    <!-- <div class="absolute top-0 left-0 w-full bg-dark-300 z-10">hello topbar</div>
    <div class="absolute top-2 left-0 w-full bg-dark-600 py-3 z-10">navbar</div> -->
    <!-- body -->
    <div class="flex justify-start items-start">
      <div
        class="w-80 py-4 px-4 min-h-screen overflow-y-auto overflow-hidden border-r border-default-100"
      >
        <TheSidebar />
      </div>
      <div
        id="elementId"
        class="w-full min-h-screen overflow-y-auto relative scrollbar-gatter"
        :style="{ height: 'calc(100vh - 64px)' }"
      >
        <div class="py-4 px-4 bg-dark-800 text-white sticky top-0 z-10 shadow">header here</div>
        <div class="py-4 px-4">
          <AppMain />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { AppMain, TheSidebar } from './components'
</script>
