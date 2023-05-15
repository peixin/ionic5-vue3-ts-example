<template>
  <ion-page data-test="information">
    <CommonHeader>Course Information</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center">
        <ion-icon :icon="informationCircle" size="large" color="success" />
        <ion-label>Course {{ $route.params.courseId }}</ion-label>
        Common Float Bookmark button number: {{ count }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { informationCircle } from "ionicons/icons";
import { ref } from "vue";
import { onMounted } from "vue";

const count = ref(0);

onMounted(() => {
  count.value = document.querySelectorAll("ion-fab[data-testid=bookmark]").length;
});

</script>
