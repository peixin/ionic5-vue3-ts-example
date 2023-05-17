// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import routes from "./routes";
import customizedNavigation from "./customized-navigation";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

customizedNavigation.init(router);

export default router;
