<template>
  <ion-page date-test="courses">
    <CommonHeader noBackButton>Courses</CommonHeader>
    <ion-content>
      <div class="page flex-column-center">
        <ion-icon :icon="school" size="large" color="secondary" />
        <ion-list>
          <ion-item v-for="course in courses" :key="course.id" @click="onClick(course.id)">
            <ion-label>{{ course.name }}</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { school } from "ionicons/icons";
import { IonList, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = new Array(Math.ceil(Math.random() * 10 + 5))
  .fill(0)
  .map((_, index) => ({ name: `Course ${index + 1}`, id: index + 1 }));
const onClick = (courseId: number) => {
  router.push(`/course/${courseId}`);
};
</script>
