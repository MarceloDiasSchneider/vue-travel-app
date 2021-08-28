import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/Brazil.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/Hawaii.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/Panama.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav-link-active",
});

export default router;
