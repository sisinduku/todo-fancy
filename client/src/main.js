// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import VueFire from 'vuefire'
import firebase from 'firebase'
import axios from 'axios'
import * as uiv from 'uiv'

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
Vue.use(uiv)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
