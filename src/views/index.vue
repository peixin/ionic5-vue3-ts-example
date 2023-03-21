<template>
  <ion-tabs>
    <ion-router-outlet />
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/home">
        <ion-icon :icon="homeOutline"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="courses" href="/courses">
        <ion-icon :icon="schoolOutline"></ion-icon>
        <ion-label>Courses</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>
<script setup lang="ts">
import { homeOutline, schoolOutline } from "ionicons/icons";
import { IonTabs, IonTabButton, IonTabBar } from "@ionic/vue";
</script>
