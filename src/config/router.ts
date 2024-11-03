import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const NotFound = () => import('../views/NotFound.vue');
const Contact = () => import('../views/Contact.vue');
const Projects = () => import('../views/projects/Projects.vue');
const Details = () => import('../views/details/ProjectDetails.vue');

const base = '/kostoff.dev'
const routes = [
  { path: base, name: 'home', component: Home },
  { path: `${base}/projects`, name: 'projects', component: Projects },
  { path: `${base}/projects/:id`, name: 'details', component: Details, props: true },
  { path: `${base}/contact`, name: 'contact', component: Contact },
  {
    path: `${base}/:pathMatch(.*)*`,
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;