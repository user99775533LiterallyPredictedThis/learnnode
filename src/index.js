import './style.scss';

import { createApp } from 'vue';

import { createWebHashHistory, createMemoryHistory, createWebHistory, createRouter } from 'vue-router';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';

const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

let app = createApp(App);
app.use(router);
app.mount('#app');