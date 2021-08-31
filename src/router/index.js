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
    component: () =>
      import(
        /* webpackChunkName: "destinations" */ "@/views/DestinationShow.vue"
      ),
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
            /* webpackChunkName: "experiences" */ "../views/ExperiencesShow.vue"
          ),
        props: (route) => ({
          ...route.params,
          id: parseInt(route.params.id),
        }),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/protected",
    name: "protected",
    component: () =>
      import(/* webpackChunkName: "protected" */ "../views/Protected.vue"),
    meta: {
      requiresAuth: true,
    },
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
  scrollBehavior(to, from, savedPosition) {
    // return { top: null, left: null, behavior: null, }
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 100);
      })
    );
  },
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: "login" };
  }
  if (to.path === "/login" && window.user) {
    return { name: "protected" };
  }
});

export default router;
