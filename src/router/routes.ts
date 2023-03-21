import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    redirect: "/home",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/courses",
        name: "Courses",
        component: () => import("../views/Courses.vue"),
      },
    ],
  },

  {
    path: "/course/:courseId(\\d+)",
    name: "Course",
    component: () => import("../views/course/index.vue"),
    redirect: { name: "CourseNavigation" },
    children: [
      {
        path: "navigation",
        name: "CourseNavigation",
        component: () => import("../views/course/Navigation.vue"),
      },
      {
        path: "information",
        name: "CourseInformation",
        component: () => import("../views/course/Information.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      anonymous: true,
    },
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
