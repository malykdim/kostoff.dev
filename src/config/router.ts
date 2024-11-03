import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const NotFound = () => import('../views/NotFound.vue');
const Contact = () => import('../views/Contact.vue');
const Projects = () => import('../views/projects/Projects.vue');
const Details = () => import('../views/details/ProjectDetails.vue');

const routes = [
  { path: '/kostoff.dev/', name: 'home', component: Home },
  { path: '/kostoff.dev/projects', name: 'projects', component: Projects },
  { path: '/kostoff.dev/projects/:id', name: 'details', component: Details, props: true },
  { path: '/kostoff.dev/contact', name: 'contact', component: Contact },
  {
    path: '/kostoff.dev/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;