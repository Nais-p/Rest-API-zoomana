import Vue from "vue";
import Vuex from "vuex";
import products from "./product";
import users from './auth.js';
import shops from './shop';

Vue.use(Vuex);

const modules = {
    products,
    users,
    shops
};

export default new Vuex.Store({
  modules,
});

export { modules };
