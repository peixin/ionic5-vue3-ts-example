<template>
  <ion-page>
    <CommonHeader>404</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center">
        <ion-icon :icon="warning" size="large" color="warning"/>
        <ion-label color="danger">404</ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { warning } from "ionicons/icons";
</script>
