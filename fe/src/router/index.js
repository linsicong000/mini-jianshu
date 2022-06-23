import Index from '@/components/Index.vue';
import Detail from '@/components/Detail.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Index, name: 'Index' },
    { path: '/detail', component: Detail, name: 'Detail' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;