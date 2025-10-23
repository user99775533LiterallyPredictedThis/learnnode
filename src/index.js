import './style.scss';

import { createApp } from 'vue';

import { createWebHashHistory, createMemoryHistory, createWebHistory, createRouter } from 'vue-router';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';


const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick and Morty' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './App.vue';

let app = createApp(App);
app.use(router);
app.mount('#app');