import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import VueSession from "vue-session";

import "bootstrap/dist/css/bootstrap.min.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies, { expires: "1d" })
  .use(VueSession)
  .mount("#app");

// $cookies.set('auth', 1000)
// $cookies.get('auth')
// $cookies.remove('auth')
// $cookies.isKey('auth')
// $cookies.keys()

// $session.start()
// $session.set('auth', 1000)
// $session.get('auth')
// $session.id()
// $session.renew()
// $session.destroy()
