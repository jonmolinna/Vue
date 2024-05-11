import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

const app = createApp(App);

// Directivas Globales
app.directive("font-size", {
  beforeMount: (element, binding) => {
    element.style.fontSize = "50px";
  },
});

app.directive("custom-size", {
  beforeMount: (element, binding) => {
    element.style.fontSize = binding.value + "px";
  },
});

// v-bind:[class, key, style]
app.directive("custom-size", {
  beforeMount: (element, binding) => {
    let size = 18;
    switch (binding.arg) {
      case "sm":
        size = 10;
        break;
      case "md":
        size = 18;
        break;
      case "lg":
        size = 25;
        break;
      case "xl":
        size = 40;
        break;
      case "xxl":
        size = 72;
    }

    element.style.fontSize = size + "px";
  },
});

app.mount("#app");
