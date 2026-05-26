import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./HomePage.vue";
import NewsDetails from "./NewsDetails.vue";


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomePage
    },
    {
        path: '/read/:id',
        name: 'NewsDetails',
        component: NewsDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router