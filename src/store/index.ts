import Vue from 'vue';
import Vuex from 'vuex';
import { state, mutations, getters } from './main';

Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    getters,
})