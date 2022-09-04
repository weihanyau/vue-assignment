import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DragDropView from "../views/DragDropView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/DragDrop",
      name: "dragDrop",
      component: DragDropView,
    },
  ],
});

export default router;
