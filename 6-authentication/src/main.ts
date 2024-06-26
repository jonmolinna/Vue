import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/bootstrap.js";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXLQJCCf-pbBhyvqGX3MRMu3WndY2Ebms",
  authDomain: "angular-firebase-9b19e.firebaseapp.com",
  databaseURL: "https://angular-firebase-9b19e-default-rtdb.firebaseio.com",
  projectId: "angular-firebase-9b19e",
  storageBucket: "angular-firebase-9b19e.appspot.com",
  messagingSenderId: "301511099179",
  appId: "1:301511099179:web:d9fdfeca3c0077b6617b6e",
};

const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
