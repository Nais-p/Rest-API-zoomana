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

const users = {
  namespaced: true,
  state: {
    auth: false,
    role: [""],
    username: "",
    id: "",
  },

  mutations: {
    SIGNIN(state, payload) {
      const user = {
        username: payload.username,
        email: payload.email,
        role: payload.role,
        id: payload.id,
      };
      localStorage.setItem("user", JSON.stringify(user));
      state.role = payload.role;
      state.username = payload.username;
      state.id = payload.id;
      state.auth = true;
    },
    LOGOUT(state) {
      localStorage.clear();
      state.auth = false;
    },
  },
  actions: {
    async signup({ commit }, payload) {
      try {
        const response = await axios
          .post(url + "signup", payload)
          .then((res) => {
            commit("SIGNUP", response);
            console.log(res);
          });
        console.log(response);
      } catch (err) {
        this.$snotify.error("Invalid Username or Password");
        console.log(err);
      }
    },

    async signin({ commit }, payload) {
      try {
        const response = await axios
          .post(url + "signin-seller", payload)
          .then((res) => {
            commit("SIGNIN", res.data);
            console.log(res);
          });
        console.log(response);
      } catch (err) {
        this.$snotify.error("Invalid Username or Password");
        console.log(err);
      }
    },
    async signinClient({ commit }, payload) {
      try {
        const response = await axios
          .post(url + "signin-client", payload)
          .then((res) => {
            commit("SIGNIN", res.data);
            console.log(res);
          });
        console.log(response);
      } catch (err) {
        this.$snotify.error("Invalid Username or Password");
        console.log(err);
      }
    },
    logout({ commit }) {
      commit("LOGOUT");
    },

    async update_client({ commit }, payload) {
      try {
        const response = await axios
          .put(`${url}modify-client/618259163378113e6475caaf`, payload.data)
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
export default users;
