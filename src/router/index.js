import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'High',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/knights',
        name: 'Knights',
        component: () => import('../views/Knights.vue')
      },
      {
        path: '/world',
        name: 'World',
        component: () => import('../views/World.vue')
      },
      {
        path: '/random',
        name: 'Random',
        component: () => import('../views/Cavaleiros.vue')
      },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router