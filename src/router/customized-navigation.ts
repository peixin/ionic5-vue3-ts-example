import { Router } from "vue-router";

const init = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    console.log(`${from.name?.toString()} --> ${to.name?.toString()}`);

    if (from.name === "CourseInformation" && to.name !== "CourseLeave") {
      next({
        name: "CourseLeave",
        replace: true,
        query: {
          from: from.name as string,
          to: to.name as string,
        },
      });
    } else {
      next();
    }
  });
};

export default { init };
