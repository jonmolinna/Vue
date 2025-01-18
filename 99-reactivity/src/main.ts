import { createApp } from "vue";
import App from "./App.vue";

import example from "../plugins/example";

// createApp(App).mount('#app')

const app = createApp(App);
app
  .use(example, {
    message: "Hello World",
  })
  .mount("#app");
