import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: ProductPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: NotFoundPage
        },
    ]
})

export default router