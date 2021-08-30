import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import souceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    // props: true,
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id),
    }),
    beforeEnter(to) {
      const exists = souceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "not.found",
          params: {
            pathMatch: to.path.split("/").slice(1),
            query: to.query,
            hash: to.hash,
          },
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () =>
          import(
            /* webpackChunkName: "Experiences" */ "../views/ExperiencesShow.vue"
          ),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id),
        }),
      },
    ],
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
  {
    path: "/:pathMatch(.*)*",
    name: "not.found",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "nav-link-active",
});

export default router;
