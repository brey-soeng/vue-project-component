import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Trans from '@/lang/translation'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Trans.routeMiddleware,
      children: [
        {
          path: '',
          name: 'Home',
          meta: { title: 'home', current: false, hidden: false, permission: '', icon: '' },
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'About',
          meta: { title: 'about', current: false, hidden: false, permission: '', icon: '' },
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'drawer',
          name: 'drawer',
          meta: { title: 'drawer', current: false, hidden: false, permission: '', icon: '' },
          component: () => import('../views/DrawerView.vue')
        },
        {
          path: 'menu',
          name: 'menu',
          meta: { title: 'menu', current: false, hidden: false, permission: '', icon: '' },
          component: () => import('../views/MenuView.vue')
        },
        {
          path: 'trello',
          name: 'trello',
          meta: { title: 'trello', current: false, hidden: false, permission: '', icon: '' },
          component: () => import('../views/TrelloView.vue')
        }
      ]
    }
  ]
})

export default router
