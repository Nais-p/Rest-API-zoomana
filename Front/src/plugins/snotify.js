import Snotify from 'vue-snotify'
import Vue from 'vue'

const options = {
  timeout: 1000,
  showProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
}

Vue.use(Snotify, options)

const snotify = Vue.prototype.$snotify

export default snotify
