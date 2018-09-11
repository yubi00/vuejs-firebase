import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyB9AqyuXABdsiNYrhv7nDzHNKLQ-FLdgUQ",
  authDomain: "vuefirebase-304ab.firebaseapp.com",
  databaseURL: "https://vuefirebase-304ab.firebaseio.com",
  projectId: "vuefirebase-304ab",
  storageBucket: "vuefirebase-304ab.appspot.com",
  messagingSenderId: "933374756016"
};
firebase.initializeApp(config);
/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
      app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})

 