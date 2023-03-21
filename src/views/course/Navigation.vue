<template>
  <ion-page data-test="navigation">
    <CommonHeader>Course Navigation</CommonHeader>
    <ion-content>
      <div class="page full flex-column-center">
        <ion-icon :icon="book" size="large" color="success" />
        <ion-label>Course {{ $route.params.courseId }}</ion-label>
        <router-link :to="`/course/${$route.params.courseId}/information`">Goto Information</router-link>
        Common Float Bookmark button number: {{ count }}
        <pre>
          if use &lt;ion-router-outlet&gt; in course/index.vue 
          
          child route e.g. from /navigation back to /courses will report error: 
          
          Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'classList')

          so must use &lt;router-view&gt;
        </pre>
        <br />
        <pre>
          the bottom right float bookmark button rendered twice.

          because in dom tree have two &lt;ion-page date-test=&quot;course-index&quot;&gt; node
        </pre>

        <a href="https://github.com/ionic-team/ionic-framework/issues/26987" target="_blank"
          >https://github.com/ionic-team/ionic-framework/issues/26987</a
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { book } from "ionicons/icons";
import { onMounted } from "vue";

const count = ref(0);

onMounted(() => {
  count.value = document.querySelectorAll("ion-fab[data-testid=bookmark]").length;
});
</script>

<style>
pre {
  padding: 1rem;
  font-size: 1rem;
  color: red;
  white-space: pre-line;
}
</style>
