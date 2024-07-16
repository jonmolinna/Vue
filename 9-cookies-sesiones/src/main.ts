import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies, { expires: "1d" })
  .mount("#app");

// $cookies.set('auth', 1000)
// $cookies.get('auth')
// $cookies.remove('auth')
// $cookies.isKey('auth')
// $cookies.keys()

// 14-17
