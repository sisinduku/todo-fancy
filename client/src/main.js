// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const VueFire = require('vuefire')
const firebase = require('firebase')
const axios = require('axios')

const config = {
  apiKey: process.env.FIREBASEKEY,
  databaseURL: process.env.FIREBASEURL,
  projectId: process.env.FIREBASEPROJECT
}

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

Vue.prototype.$db = db.ref('todo')
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/'
})
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
