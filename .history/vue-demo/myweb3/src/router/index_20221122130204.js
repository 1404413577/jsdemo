import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: 'home',
    component: () => import('../views/Home.vue')
},
  {
    path: '/onclick',
    name: 'onclick',
    component: () => import('../views/OnClick.vue')
  },
  {
    path: '/res',
    name: 'res',
    component: () => import('../views/res.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
