import Vue from 'vue';
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Collection from './Collection';

Vue.use(BootstrapVue);
var main = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})

Collection("hl");