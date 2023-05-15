<template>
  <ion-fab v-if="showLayer" slot="fixed" vertical="bottom" horizontal="end" data-testid="bookmark">
    <ion-fab-button>
      <ion-icon :icon="bookmarkOutline"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>
<script setup lang="ts">
import { IonFab, IonFabButton } from "@ionic/vue";
import { bookmarkOutline } from "ionicons/icons";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showLayer = computed(() => {
  return route.fullPath.startsWith("/course/")
});

</script>
