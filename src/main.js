import { createApp } from 'vue'

import router from './config/router.ts'

import App from './App.vue'
import 'primeicons/primeicons.css'
import './assets/style.scss'

import AppHeaderVue from './components/header/AppHeader.vue'
import AppFooterVue from './components/footer/AppFooter.vue'

const app = createApp(App)

app.use(router)

app.component('AppHeader', AppHeaderVue)
  .component('AppFooter', AppFooterVue)

app.mount('#app')
