import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const NotFound = () => import('../views/NotFound.vue');
const Auth = () => import('../views/admin/Auth.vue');


const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Auth },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;