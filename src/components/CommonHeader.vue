<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start" v-if="!noBackButton">
        <ion-button @click="back">
          <ion-icon :icon="arrowBackOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title><slot></slot></ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { arrowBackOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

defineProps({
  noBackButton: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const back = () => {
  router.go(-1);
};
</script>
