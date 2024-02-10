import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function esPrimo(numero: number): boolean {
  if (numero <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false
    }
  }
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/landingpage',
      name: 'Landing Page',
      component: () => import('../views/LandingPageView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const index = router.options.routes.findIndex((route) => route.path === to.path)
  if (index !== -1 && esPrimo(index)) {
    alert('No puedes acceder a esta ruta porque su índice es un número primo.')
  } else {
    next()
  }
})

export default router
