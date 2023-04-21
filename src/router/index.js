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

          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'About',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'drawer',
          name: 'drawer',
          component: () => import('../views/DrawerView.vue')
        }
      ]
    }
  ]
})

export default router
