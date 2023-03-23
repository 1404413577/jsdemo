import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "res",
    component: () => import("../views/res.vue"),
  },
  {
    path: "/home",
    component: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/onclick",
    name: "onclick",
    component: () => import("../views/OnClick.vue"),
  },

  {
    path: "/submit",
    name: "submit",
    component: () => import("../components/xiao-demo/vue2submit/fu.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
