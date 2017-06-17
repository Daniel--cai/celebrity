import Vue from 'vue';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store';
import Router from 'vue-router';   
import { sync } from 'vuex-router-sync'; 
import { routes } from './router-config';

Vue.use(BootstrapVue);
Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
})

sync(store, router)

var main = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
