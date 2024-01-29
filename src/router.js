import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import SearchView from "./views/SearchView.vue";
/* import ProjectsView from "./views/ProjectsView.vue";
import ContactsView from "./views/ContactsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFoundView from "./views/NotFoundView.vue"; */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/search",
            name: "SearchView",
            component: SearchView,
        },
        /*
        {
          path: "/contacts",
          name: "ContactsView",
          component: ContactsView,
        },
        {
          //se deovo per esempio cliccare su un progetto
          path: "/projects/:id",
          name: "SingleProjectView",
          component: SingleProjectView,
        },
        {
          //rotta di error404
          path: "/:pathMatch(.*)*",
          name: "NotFoundView",
          component: NotFoundView,
        }, */
    ],
});

export { router };