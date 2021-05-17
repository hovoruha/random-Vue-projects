import { createRouter, createWebHistory } from "vue-router";
import home from "./views/AppHomepage.vue";
import about from "./views/AppAboutPage.vue";
import contact from "./views/AppContactPage.vue";
import projects from "./views/AppProjectsPage.vue";

const routes = [
  { path: "/", name: "Home", component: home },
  { path: "/about", name: "About", component: about },
  { path: "/projects", name: "Projects", component: projects },
  { path: "/contact", name: "Contact", component: contact },
  { path: "/https://github.com/hovoruha", name: "GitHub" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
