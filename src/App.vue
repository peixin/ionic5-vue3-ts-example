<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
    <CommonLayer></CommonLayer>
  </ion-app>
</template>

<script setup lang="ts">
import CommonLayer from "@/views/CommonLayer.vue";
import { IonApp } from "@ionic/vue";
</script>

<style>
.page {
  font-size: 2rem;
}

.full {
  width: 100%;
  height: 100%;
}

.flex-column-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>