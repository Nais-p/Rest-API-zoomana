/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import axios from "axios";
// import { create_product } from "../../../../API/controllers/products.controller";
const url = "http://localhost:3000/api/all-product";
const url2 = "http://localhost:3000/api/";

const getId = JSON.parse(window.localStorage.getItem("user"));
var user_id;

if (getId == null) {
  user_id = "undefined";
} else {
  user_id = getId.id;
}
console.log(user_id);

const products = {
  namespaced: true,
  state: {
    products: [],
    product: [],
    shopProduct: [],
  },
  mutations: {
    ALL_PRODUCT(state, products) {
      state.products = products;
    },
    ID_PRODUCT(state, product) {
      state.product = product;
    },
    SHOP_PRODUCT(state, shopProduct) {
      state.shopProduct = shopProduct;
    },
  },
  actions: {
    async allproduct({ commit }) {
      try {
        const response = await axios.get(url);
        commit("ALL_PRODUCT", response.data);
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async productId({ commit }, { id }) {
      try {
        const response = await axios.get(url2 + "all-product-shop/" + id);
        commit("ID_PRODUCT", response.data[0]);
      } catch (err) {
        console.log(err.response);
      }
    },

    async shopproduct({ commit }, { id }) {
      try {
        console.log(url2 + "product-from-shop/" + id)
        setInterval(async function() {
          const response = await axios.get(url2 + "product-from-shop/" + id);
          console.log(response.data)
          commit("SHOP_PRODUCT", response.data);
        }, 100);
      } catch (err) {
        console.log(err.response);
      }
    },

    async deleteproduct({ commit }, _id) {
      try {
        var id = _id;
        const response = await axios
          .delete(`${url2}delete-product/` + id._id)
          .then((res) => {
            console.log("data", res);
            // commit('NEW_EXPERIENCE', res.data)
          });
      } catch (error) {
        throw error;
      }
    },
    async update_product({ commit }, payload) {
      try {
        console.log(payload.data);

        const response = await axios
          .put(`${url2}modify-product/${payload.id}`, payload.data)
          .then((res) => {
            commit(res.data);
            console.log(res);
          });
        console.log(response);
      } catch (err) {
        this.$snotify.error("Can't modify product");
        console.log(err);
      }
    },
  },
};
export default products;
