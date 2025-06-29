import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Project.vue";
import Contact from "../views/Contact.vue";
import Skills from "../views/Skills.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/contact", component: Contact },
  { path: "/skills", component: Skills },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
