import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import App from "~/App.vue";
import router from "~/router";
import { useMotionBinds } from "~/utils/motion";
import "~/assets/css/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(MotionPlugin, {
  directives: useMotionBinds()
});
app.mount("#app");
