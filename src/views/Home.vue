<template>
  <ion-page date-test="home">
    <CommonHeader noBackButton>Home</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center">
        <ion-icon :icon="home" size="large" color="primary" />
        <ion-label>Home</ion-label>

        <ion-button @click="logout">Logout</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { home } from "ionicons/icons";

const logout = () => {
  localStorage.removeItem("loggedIn");
  window.location.href = window.location.origin;
};
</script>
