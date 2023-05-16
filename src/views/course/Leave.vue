<template>
    <ion-page data-test="leave">
        <ion-content :scrollY="false">
            <div class="page full flex-column-center">
                <h1>Are You sure to Leave?</h1>
                <ion-button color="danger">Yes</ion-button>
                <ion-button>No</ion-button>
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
  