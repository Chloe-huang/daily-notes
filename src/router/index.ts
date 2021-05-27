import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/home.vue'),
  },
  {
    path: '/more-if-else',
    name: 'more-if-else',
    component: () => import('@/views/more-if-else/main.vue'),
  },
  {
    path: '/kform',
    name: 'kform',
    component: () => import('@/views/Form/main.vue'),
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/Toast/main.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
