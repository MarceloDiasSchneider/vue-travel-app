import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    // setting a lazy load
    component: () => import(/* webpackChunkName: "brazil"*/ "../views/Brazil"),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () => import(/* webpackChunkName: "hawaii"*/ "../views/Hawaii"),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica"*/ "../views/Jamaica"),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () => import(/* webpackChunkName: "panama"*/ "../views/Panama"),
  },
  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "link-active",
  routes,
});

export default router;
