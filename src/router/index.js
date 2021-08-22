import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "link-active",
  routes,
});

export default router;
