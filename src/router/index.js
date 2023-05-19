import { createRouter, createWebHistory } from 'vue-router'
import Trans from '@/lang/translation'
import Layout from '@/Layout/defaultLayout.vue'
const routes = [
  {
    path: '/:locale?',
    component: Layout,
    beforeEnter: Trans.routeMiddleware,
    direction: '/home',
    children: [
      {
        path: '',
        name: 'Home',
        meta: {
          title: 'home',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'menu',
        name: 'menu',
        meta: {
          title: 'menu',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/MenuView.vue')
      },
      {
        path: 'about',
        name: 'about',
        meta: {
          title: 'about',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'drawer',
        name: 'drawer',
        meta: {
          title: 'drawer',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/DrawerView.vue')
      },
      {
        path: 'trello',
        name: 'trello',
        meta: {
          title: 'trello',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/TrelloView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
