import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/display.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";

import CommonHeader from "@/components/CommonHeader.vue";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonicVue,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from "@ionic/vue";

const app = createApp(App);

app.component("ion-content", IonContent);
app.component("ion-router-outlet", IonRouterOutlet);
app.component("ion-page", IonPage);
app.component("ion-toolbar", IonToolbar);
app.component("ion-footer", IonFooter);
app.component("ion-icon", IonIcon);
app.component("ion-header", IonHeader);
app.component("ion-label", IonLabel);
app.component("ion-buttons", IonButtons);
app.component("ion-button", IonButton);
app.component("ion-title", IonTitle);
app.component("ion-back-button", IonBackButton);

app.component("CommonHeader", CommonHeader);

app.use(IonicVue, { mode: "ios", hardwareBackButton: false, swipeBackEnabled: true }).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
