This Project is an minimal reproduction for some [Ionic Framework](https://ionicframework.com/) error

Ionic Vue 5 + Vue3 + Typescript Project

Dependencies:
```
"@ionic/vue": "5.9.4",
"@ionic/vue-router": "5.9.4",
"@ionic/core": "5.9.4",
"vue": "^3.2.21",
"vue-router": "4.1.3",
```

**minimal reproduction: [https://github.com/peixin/ionic5-vue3-ts-example](https://github.com/peixin/ionic5-vue3-ts-example)**

**preview: [https://ionic5-vue3-ts-example.vercel.app](https://ionic5-vue3-ts-example.vercel.app)**


### Error:
Intercept the route in `onBeforeRouteLeave` hook and replace to another route. The path has changed, but the component has not refreshed.(Only trigger developer service hot reload, the page can be rendered.)

Steps to Reproduce

```
/courses -> /course/1/navigation --> /course/1/information --> [back] [intercept]
```

Expected Behavior

```
/courses -> /course/1/navigation --> /course/1/information --> [back] [intercept]
                                 --> /course/1/leave
```
Current Behavior

```
/courses -> /course/1/navigation --> /course/1/information --> [back] [intercept]
                                 --> /course/1/leave (path changed, Component still `Information`)
```

In [`App.vue`](./src/App.vue) using `router-view` can achieve the goal, but using `ion-router-outlet` will not work.

```diff
 <template>
   <ion-app>
-    <!-- <ion-router-outlet></ion-router-outlet> -->
-    <router-view></router-view>
+    <ion-router-outlet></ion-router-outlet>
+    <!-- <router-view></router-view> -->
   </ion-app>
 </template>
```


[Github Issue](https://github.com/ionic-team/ionic-framework/issues/27485)


