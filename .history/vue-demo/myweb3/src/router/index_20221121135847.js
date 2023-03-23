import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/onclick',
    name: 'onclick',
    component: () => import('../views/OnClick.vue')
  },
  {
    path: '/res',
    name: 'Res',
    component: () => import('../views/res.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
