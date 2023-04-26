<template>
  <div class="py-10 w-96">
    <nav-menu :menuList="navigation" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const navigation = ref([
  {
    name: 'dashboard',
    path: '',
    meta: { title: 'Dashboard', current: false, icon: 'Home' }
  },
  {
    name: 'Teams',
    path: '#',
    meta: { title: 'home', current: false, icon: 'Home' },
    children: [
      {
        name: 'Engineering',
        path: '#',
        meta: { title: 'Engineering', current: false, icon: 'Home' },
        children: [
          {
            name: 'dddd',
            path: '#',
            meta: { title: 'ddd', current: false, icon: 'Home' },
            children: [
              {
                name: 'Engineering',
                path: '#',
                meta: { title: 'Engineering', current: false, icon: 'Home' }
              },
              {
                name: 'Human Resources',
                path: '#',
                meta: { title: 'Engineering', current: false, icon: 'Home' }
              },
              {
                name: 'Customer Success',
                path: '#',
                meta: { title: 'Engineering', current: false, icon: 'Home' }
              }
            ]
          },
          {
            name: 'Human Resources',
            path: '#',
            meta: { title: 'Engineering', current: false, icon: 'Home' }
          },
          {
            name: 'Customer Success',
            path: '#',
            meta: { title: 'Engineering', current: false, icon: 'Home' }
          }
        ]
      },
      {
        name: 'Human Resources',
        path: '#',
        meta: { title: 'Human Resources', current: false, icon: 'Home' }
      },
      {
        name: 'Customer Success',
        path: '#',
        meta: { title: 'Customer Success', current: false, icon: 'Home' }
      }
    ]
  },
  {
    name: 'Projects',
    path: '#',
    meta: { title: 'Projects', current: false, icon: 'Home' },
    children: [
      {
        name: 'GraphQL API',
        path: '',
        meta: { title: 'GraphQL API', current: false, icon: 'Home' }
      },
      {
        name: 'iOS App',
        path: '',
        meta: { title: 'GraphQL API', current: false, icon: 'Home' }
      },
      {
        name: 'Android App',
        path: '',
        meta: { title: 'GraphQL API', current: false, icon: 'Home' }
      },
      {
        name: 'New Customer Portal',
        path: '',
        meta: { title: 'GraphQL API', current: false, icon: 'Home' }
      }
    ]
  },
  {
    name: 'Calendar',
    path: 'about',
    meta: { title: 'GraphQL API', current: false, icon: 'Home' }
  },
  {
    name: 'Documents',
    path: 'drawer',
    meta: { title: 'GraphQL API', current: false, icon: 'Home' }
  },
  {
    name: 'Reports',
    path: '',
    meta: { title: 'GraphQL API', current: false, icon: 'Home' }
  }
])
</script>
