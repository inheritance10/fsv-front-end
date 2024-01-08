import {createRouter, createWebHistory} from 'vue-router'
import CartPage from "@/views/CartPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import ProductDetailPage from "@/views/ProductDetailPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
    {
        path: '/products',
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage
    },
    {
        path: '/product/:id',
        name: 'ProductDetailPage',
        component: ProductDetailPage
    },
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
