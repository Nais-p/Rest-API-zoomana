import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import App from "../App.vue";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  el: "#app",
  components: { App },
  template: "<App/>",
});
