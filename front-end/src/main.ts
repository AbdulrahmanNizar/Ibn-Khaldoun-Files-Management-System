import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(MotionPlugin).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
