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
        name: 'home',
        meta: {
          title: 'Home',
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
          title: 'Menu',
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
          title: 'About',
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
          title: 'Drawer',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/DrawerView.vue')
      },
      {
        path: 'notification',
        name: 'notification',
        meta: {
          title: 'Notification',
          current: false,
          hidden: false,
          permission: '',
          icon: '',
          transition: 'slide'
        },
        component: () => import('../views/NotificationView.vue')
      },
      {
        path: 'trello',
        name: 'trello',
        meta: {
          title: 'Trello',
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
