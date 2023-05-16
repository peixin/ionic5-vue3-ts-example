<template>
  <ion-page data-test="navigation">
    <CommonHeader>Course Navigation</CommonHeader>
    <ion-content>
      <div class="page full flex-column-center">
        <ion-icon :icon="book" size="large" color="success" />
        <ion-label>Course {{ $route.params.courseId }}</ion-label>
        <router-link :to="`/course/${$route.params.courseId}/information`">Goto Information</router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { book } from "ionicons/icons";
</script>

<style>
pre {
  padding: 1rem;
  font-size: 1rem;
  color: red;
  white-space: pre-line;
}
</style>
