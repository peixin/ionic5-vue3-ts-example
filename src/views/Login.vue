<template>
  <ion-page>
    <CommonHeader noBackButton>Login</CommonHeader>
    <ion-content :scrollY="false">
      <div class="page full flex-column-center flex-start form">
        <ion-item>
          <ion-label>Name</ion-label>
          <ion-input placeholder="Enter Name"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input placeholder="Enter Password" type="password" value="password"></ion-input>
        </ion-item>
        <ion-item>
          <ion-button @click="login">Login</ion-button>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonInput, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();
const login = () => {
  localStorage.setItem("loggedIn", "true");
  router.replace("/home");
};
</script>

<style>
.form {
  padding: 1rem;
}
.flex-start {
  align-items: flex-start;
}
</style>
