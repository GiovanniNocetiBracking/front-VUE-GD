import { sync } from 'vuex-router-sync';

import Vue from "vue";
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'
import VueToast from 'vue-toast-notification';
import Toasted from 'vue-toasted';

import router from './router'
import store from './store'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// app config

Vue.config.productionTip = false;

Vue.use(Vuex)
Vue.use(Vuelidate)
Vue.use(VueToast)
Vue.use(Toasted)

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
