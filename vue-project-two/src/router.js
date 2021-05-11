import { createRouter, createWebHistory } from "vue-router";
import home from "./views/AppHomepage.vue";
import about from "./views/AppAboutPage.vue";
import contact from "./views/AppContactPage.vue";

const routes = [
  { path: "/", name: "Home", component: home },
  { path: "/about", name: "About", component: about },
  { path: "/contact", name: "Contact", component: contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
