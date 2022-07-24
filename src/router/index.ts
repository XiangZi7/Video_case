import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'search',
        component: () => import('@/views/search/search.vue')
    },
    {
        path: '/info',
        name: 'info',
        component: () => import('@/views/info/info.vue')
    },
    {
        path: '/play',
        name: 'play',
        component: () => import('@/views/play/play.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router