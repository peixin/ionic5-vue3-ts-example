import { createRouter, createWebHistory } from "@ionic/vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach(async (to, from, next) => {
  console.log(`From ${from.name?.toString()} To: ${to.name?.toString()}`);
  next();
});
