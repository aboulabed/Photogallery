import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/image/:id",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/imageDetails.vue"),
    },
    {
      path: "/cart",
      name: "cart",

      component: () => import("../views/cart.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",

      component: () => import("../views/checkout.vue"),
    },
  ],
});

export default router;
