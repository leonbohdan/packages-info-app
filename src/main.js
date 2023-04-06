import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia';

import vuetify from '@/plugins/vuetify';

import App from './App.vue';

import './assets/main.css';

Vue.use(PiniaVuePlugin); 

new Vue({
  vuetify,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount('#app');
