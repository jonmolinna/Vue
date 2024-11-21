import { createApp } from "vue";
import App from "./App.vue";

// Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoTrash, CoHeart } from "oh-vue-icons/icons";

addIcons(CoTrash, CoHeart);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
