import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/track',
      name: 'track',
    
      component: () => import('@/views/TrackView.vue')
    },
    {
      path: '/recieve',
      name: 'recieve',
    
      component: () => import('@/views/RecieveView.vue')
    }
  ]
})

export default router
