/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import axios from "axios";
const url = "http://localhost:3000/api/";
const getId = JSON.parse(window.localStorage.getItem("user"));
var user_id;

if (getId == null) {
  user_id = "undefined";
} else {
  user_id = getId.id;
}
console.log(user_id);

const shops = {
  namespaced: true,
  state: {
    username: "",
    shop: [],
  },

  mutations: {
    SHOP_SELLER(state, shop) {
      state.shop = shop;
    },
  },

  actions: {
    async createshop({ commit }, payload) {
      try {
        const response = await axios
          .post(`${url}seller-shop/` + user_id, payload)
          .then((res) => {
            console.log("data", res);
            // commit('NEW_EXPERIENCE', res.data)
          });
      } catch (error) {
        throw error;
      }
    },

    async deleteshop({ commit }, _id) {
      try {
        var id = _id;
        const response = await axios
          .delete(`${url}delete-shop/` + id._id)
          .then((res) => {
            console.log("data", res);
            // commit('NEW_EXPERIENCE', res.data)
          });
      } catch (error) {
        throw error;
      }
    },

    async shopseller({ commit }, { id }) {
      try {
        setInterval(async function() {
          const response = await axios.get(url + "get-shop/" + id);
          commit("SHOP_SELLER", response.data);
          // console.log(response.data);
        }, 100);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default shops;
