<template>
  <ion-page date-test="course-index">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component"></component>
      </transition>
    </router-view>
    <!-- if use ion-router-outlet child page e.g. /navigation back to /courses will report error:  -->
    <!-- index.esm.js?58b7:884 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'classList') -->
    <!-- <ion-router-outlet /> -->
    <ion-fab slot="fixed" vertical="bottom" horizontal="end" data-testid="bookmark">
      <ion-fab-button>
        <ion-icon :icon="bookmarkOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>
<script setup lang="ts">
import { IonFab, IonFabButton } from "@ionic/vue";
import { bookmarkOutline } from "ionicons/icons";
</script>
