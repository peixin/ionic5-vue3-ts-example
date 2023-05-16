<template>
  <ion-page data-test="information">
    <CommonHeader>Course Information</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center">
        <ion-icon :icon="informationCircle" size="large" color="success" />
        <ion-label>Course {{ $route.params.courseId }}</ion-label>
        <div>
          onBeforeRouteLeave to replace to Leave page, the url is changed but component not
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { informationCircle } from "ionicons/icons";
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from, next) => {
  if (to.name === "CourseNavigation") {
    next({ name: "CourseLeave", replace: true, force: true })
  } else {
    next()
  }
});

</script>
