import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Manage from "@/views/Manage.vue";
import Song from "@/views/Song.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/manage",
    name: "manage",
    component: Manage,
  },
  {
    path: "/song/:id",
    name: "song",
    component: Song,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
