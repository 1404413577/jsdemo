import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/onclick',
    name: 'onclick',
    component: () => import('../views/OnClick.vue')
  },
  {
    path: '/resdemo',
    name: 'ResDemo',
    component: () => import('../views/ResDome.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
