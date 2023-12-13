import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/command/home-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/garlic',
      name: 'garlic',
      component: () => import('../views/garlic-page.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/command/auth-page.vue')
    },
    {
      path: '/login',
      name: 'Log in',
      component: () => import('../views/command/login-page.vue')
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: () => import('../views/command/signup-page.vue')
    }
  ]
})

export default router
