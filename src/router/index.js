import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Upload from "../views/Upload.vue";
import PetSearch from "../views/PetSearch.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/upload',
        name: 'upload',
        component: Upload
    },
    {
        path: '/pet-search',
        name: 'pet-search',
        component: PetSearch
    },
    {
        path: '/requirements/:country',
        name: 'requirements',
        component: PetSearch
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;