import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
import BlockView from "../views/BlockView.vue";
import PostView from "../views/PostView.vue";
import AlbumView from "../views/AlbumView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
    // redirect: to => {return { name: 'services'}},
    name: "home",
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/services/:id",
    name: "album",
    component: AlbumView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlockView,
  },
  {
    path: "/blog/:id",
    name: "post",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
