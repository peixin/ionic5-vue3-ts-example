import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    redirect: "/courses",
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/Courses.vue"),
  },
  {
    path: "/course/:courseId(\\d+)",
    name: "Course",
    redirect: { name: "CourseNavigation" },
  },
  {
    path: "/course/:courseId(\\d+)/navigation",
    name: "CourseNavigation",
    component: () => import("../views/course/Navigation.vue"),
  },
  {
    path: "/course/:courseId(\\d+)/information",
    name: "CourseInformation",
    component: () => import("../views/course/Information.vue"),
  },
  {
    path: "/course/:courseId(\\d+)/leave",
    name: "CourseLeave",
    component: () => import("../views/course/Leave.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: {
      anonymous: true,
    },
  },
];

export default routes;
