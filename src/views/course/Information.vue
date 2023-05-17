<template>
  <ion-page data-test="information">
    <CommonHeader>Course Information</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center">
        <ion-icon :icon="informationCircle" size="large" color="success" />
        <ion-label>Course {{ $route.params.courseId }} Information</ion-label>
        <div class="issues">
          onBeforeRouteLeave to replace to Leave page, the url has changed but component not refreshed
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { informationCircle } from "ionicons/icons";
</script>

<style scoped>
.issues {
  font-size: 1.4rem;
  padding: 1rem;
  color: red;
}
</style>