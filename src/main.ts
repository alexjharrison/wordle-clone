import { createApp } from "vue";
import App from "./App.vue";

import { useRegisterSW } from "virtual:pwa-register/vue";

const intervalMS = 60 * 60 * 1000;

useRegisterSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
});

createApp(App).mount("#app");
