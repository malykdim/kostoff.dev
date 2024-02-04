import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './config/router.ts';




import './style.scss';
import App from './App.vue';

import AppHeaderVue from './components/header/AppHeader.vue';
import AppFooterVue from './components/footer/AppFooter.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component('AppHeader', AppHeaderVue)
    .component('AppFooter', AppFooterVue);

app.mount('#app');
