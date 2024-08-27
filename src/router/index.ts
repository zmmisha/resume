import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/AppHome.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AppAbout.vue')
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/AppProjects.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/AppContact.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
