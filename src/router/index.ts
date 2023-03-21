import { createRouter, createWebHistory } from "@ionic/vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


router.beforeEach((to, __from, next) => {
  if (to.matched.some((record) => !record.meta.anonymous)) {
    if (localStorage.getItem("loggedIn") === "true") {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
})