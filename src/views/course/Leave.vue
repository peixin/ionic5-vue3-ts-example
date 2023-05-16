<template>
    <ion-page data-test="leave">
        <ion-content :scrollY="false">
            <div class="page full flex-column-center">
                <h1>Are You sure to Leave?</h1>
                <ion-button color="danger" @click=leave>Yes</ion-button>
                <ion-button @click=cancel>No</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

console.log(route.query)

const leave = () => {
    router.replace({ name: route.query.to as string });
};

const cancel = () => {
    router.push({ name: route.query.from as string });
};


</script>
  