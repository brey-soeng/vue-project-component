<template>
  <div class="py-10 w-96">
    <button @click="handleModal" class="bg-primary-600 text-white py-2 px-2 rounded mb-3">
      Click modal
    </button>
    <nav-menu :menuList="navigation" />
    <the-modal v-model="visible" title="Modal title">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolorum. Cum, nemo.
      Quibusdam expedita omnis velit officia molestias, cupiditate enim doloribus libero accusamus
      dolores vero voluptas! Corporis asperiores voluptatum ad.
      <template> hello world </template>
    </the-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const handleModal = () => {
  visible.value = true
}
const navigation = ref([
  {
    name: 'dashboard',
    path: '#',
    meta: { title: 'Dashboard', current: false, icon: 'Home' }
  },
  {
    name: 'Projects',
    path: '#',
    meta: { title: 'Projects', current: false, icon: 'Home' },
    children: [
      {
        name: 'GraphQL API',
        path: '#',
        meta: { title: 'GraphQL API', current: false, icon: '' },
        children: [
          {
            name: 'GraphQL API',
            path: '#',
            meta: { title: 'GraphQL API', current: false, icon: '' }
          },
          {
            name: 'iOS',
            path: '#',
            meta: { title: 'iOS App', current: false, icon: '' }
          },
          {
            name: 'android',
            path: '#',
            meta: { title: 'Android App', current: false, icon: '' }
          },
          {
            name: 'customer',
            path: '#',
            meta: { title: 'New Customer Portal', current: false, icon: 'Home' },
            children: [
              {
                name: 'GraphQL API',
                path: '#',
                meta: { title: 'GraphQL API', current: false, icon: '' }
              },
              {
                name: 'iOS',
                path: '#',
                meta: { title: 'iOS App', current: false, icon: '' }
              },
              {
                name: 'android',
                path: '#',
                meta: { title: 'Android App', current: false, icon: '' }
              },
              {
                name: 'customer',
                path: '#',
                meta: { title: 'New Customer Portal', current: false, icon: '' }
              }
            ]
          }
        ]
      },
      {
        name: 'iOS',
        path: '#',
        meta: { title: 'iOS App', current: false, icon: '' }
      },
      {
        name: 'android',
        path: '#',
        meta: { title: 'Android App', current: false, icon: '' }
      },
      {
        name: 'customer',
        path: '#',
        meta: { title: 'New Customer Portal', current: false, icon: '' }
      }
    ]
  },
  {
    name: 'Calendar',
    path: '#',
    meta: { title: 'Calendar', current: false, icon: '' }
  },
  {
    name: 'Documents',
    path: '#',
    meta: { title: 'Documents', current: false, icon: '' }
  },
  {
    name: 'Reports',
    path: '#',
    meta: { title: 'Reports', current: false, icon: '' }
  }
])
</script>
