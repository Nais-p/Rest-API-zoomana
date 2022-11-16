import Vue from "vue";
import VueRouter from "vue-router";
import Catalogue from "../views/catalogue.vue";
import signinClient from "../views/Auth/signin";
import signipClient from "../views/Auth/signup";
import newProduct from "../views/sellerView/form/newproduct.vue";
import newShop from "../views/sellerView/form/newshop.vue";
import product from "../views/product.vue";
import mystore from "../views/sellerView/mystore.vue";
import updateseller from "../views/sellerView/updateseller.vue";
import updateclient from "../views/clientView/updateclient.vue";
import myshop from "../views/sellerView/myshop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Catalogue,
  },

  {
    path: "/product/:id",
    name: "Product",
    component: product,
  },
  {
    path: "/myshop/:id",
    name: "myshop",
    component: myshop,
  },
  {
    path: "/mystore",
    name: "mystore",
    component: mystore,
  },
  {
    path: "/signin",
    name: "Signin",
    component: signinClient,
    meta: {
      hide: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: signipClient,
    meta: {
      hide: true,
    },
  },

  {
    path: "/newproduct",
    name: "Newproduct",
    component: newProduct,
    meta: {
      hide: true,
    },
  },

  {
    path: "/newshop",
    name: "NewShop",
    component: newShop,
    meta: {
      hide: true,
    },
  },

  {
    path: "/updateseller",
    name: "Updateseller",
    component: updateseller,
  },

  {
    path: "/updateclient",
    name: "Updateclient",
    component: updateclient,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
