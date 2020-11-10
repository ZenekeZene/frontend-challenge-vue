import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/ui/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '@/ui/views/Products.vue'),
  },
  {
    path: '/products/:category',
    name: 'ProductsByCategory',
    component: () => import(/* webpackChunkName: "about" */ '@/ui/views/Products.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "about" */ '@/ui/views/ProductDetail.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "about" */ '@/ui/views/Favorites.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
