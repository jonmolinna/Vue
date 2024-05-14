import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

const app = createApp(App);

// Directivas Globales
// Directivas personalizadas simple
app.directive("font-size", {
  beforeMount: (element, binding) => {
    element.style.fontSize = "50px";
  },
});

// Directivas personalizadas con valores
app.directive("custom-size", {
  beforeMount: (element, binding) => {
    element.style.fontSize = binding.value + "px";
  },
});

// Directivas personalizadas con argumentos
// v-bind:[class, key, style] - Argumentos
app.directive("custom-sizes", {
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

// Directivas con modificadores
app.directive("custom-font", {
  beforeMount: (element, binding) => {
    let size = 18;

    if (binding.modifiers.sm) {
      size = 10;
    } else if (binding.modifiers.lg) {
      size = 25;
    } else if (binding.modifiers.xxl) {
      size = 72;
    }

    element.style.fontSize = size + "px";

    if (binding.modifiers.red) {
      element.style.color = "#ff0000";
    } else if (binding.modifiers.green) {
      element.style.color = "#00ff00";
    } else if (binding.modifiers.blue) {
      element.style.color = "#0000ff";
    }
  },
});

app.mount("#app");
