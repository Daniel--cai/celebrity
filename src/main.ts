import Vue from 'vue';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Collection from './Collection';
import store from './store';

Vue.use(BootstrapVue);
var main = new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: {App}
})

Collection("hl");