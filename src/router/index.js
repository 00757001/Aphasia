import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/core',
    name: 'Core',
    component: () => import('../views/Core.vue')
  },
  {
    path:'/practice',
    name:'Practice',
    component: () => import('../components/Practice.vue')
  },
  {
    path:'/scramble',
    name:'Scramble',
    component: () => import('../components/Scramble.vue')
  },
  {
    path: '/home/:id',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
