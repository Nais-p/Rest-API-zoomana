import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import snotify from './plugins/snotify'
import { VueSpinners } from '@saeris/vue-spinners'

import '@fortawesome/fontawesome-free/css/all.css'


Vue.config.productionTip = false

new Vue({
  VueSpinners,
  router,
  vuetify,
  store,
  snotify,
  render: h => h(App)
}).$mount('#app')
