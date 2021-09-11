import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "postsList" */ '@/views/Posts.vue'),
  },
  {
    path: '/posts/create',
    name: 'posts.create',
    component: () => import(/* webpackChunkName: "postCreate" */ '@/views/PostCreate.vue'),
  },
  {
    path: '/posts/:id/update',
    name: 'posts.update',
    component: () => import(/* webpackChunkName: "postUpdate" */ '@/views/PostUpdate.vue'),
    props: true,
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
