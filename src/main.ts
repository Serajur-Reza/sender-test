import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ToastService from "primevue/toastservice";

import { createPinia } from "pinia";

const pinia = createPinia();

const themeConfig = {
  preset: Aura,
  options: {
    prefix: "p",
    darkModeSelector: "system",
    cssLayer: false,
  },
};

createApp(App)
  .use(PrimeVue, { theme: themeConfig })
  .use(pinia)
  .use(ToastService)
  .mount("#app");
