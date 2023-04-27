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
    name: 'School',
    path: '#',
    meta: { title: 'Academic', current: false, icon: 'Academic' },
    children: [
      {
        name: 'Engineering',
        path: '#',
        meta: { title: 'Engineering', current: false, icon: '' },
        children: [
          {
            name: 'human',
            path: '#',
            meta: { title: 'Human Resource', current: false, icon: '' },
            children: [
              {
                name: 'Engineering',
                path: '#',
                meta: { title: 'IT Engineering', current: false, icon: '' }
              },
              {
                name: 'Human Resources',
                path: '#',
                meta: { title: 'Human Engineering', current: false, icon: '' }
              },
              {
                name: 'success',
                path: '#',
                meta: { title: 'Civil Engineering', current: false, icon: '' }
              }
            ]
          },
          {
            name: 'resources',
            path: '#',
            meta: { title: 'Human Resources', current: false, icon: '' }
          },
          {
            name: 'success',
            path: '#',
            meta: { title: 'success', current: false, icon: '' }
          }
        ]
      },
      {
        name: 'Human Resources',
        path: '#',
        meta: { title: 'Human Resources', current: false, icon: '' }
      },
      {
        name: 'Customer Success',
        path: '#',
        meta: { title: 'Customer Success', current: false, icon: '' }
      }
    ]
  },
  {
    name: 'Projects',
    path: '#',
    meta: { title: 'Projects', current: false, icon: '' },
    children: [
      {
        name: 'GraphQL API',
        path: '',
        meta: { title: 'GraphQL API', current: false, icon: '' }
      },
      {
        name: 'iOS',
        path: '',
        meta: { title: 'iOS App', current: false, icon: '' }
      },
      {
        name: 'android',
        path: '',
        meta: { title: 'Android App', current: false, icon: '' }
      },
      {
        name: 'customer',
        path: '',
        meta: { title: 'New Customer Portal', current: false, icon: '' }
      }
    ]
  },
  {
    name: 'Calendar',
    path: '',
    meta: { title: 'Calendar', current: false, icon: '' }
  },
  {
    name: 'Documents',
    path: '',
    meta: { title: 'Documents', current: false, icon: '' }
  },
  {
    name: 'Reports',
    path: '',
    meta: { title: 'Reports', current: false, icon: '' }
  }
])
</script>
