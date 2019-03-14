import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import firebase from 'firebase'
import router  from './router/index'
// vuefire package for handling firebase
import Vuefire from 'vuefire'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource);
// tells vue to use vuefire
Vue.use(Vuefire)

/* firebase provided by vuefire and firebase package
 * initializeApp is passed a config parameter that is an object.
 */
  firebase.initializeApp({
    apiKey: "AIzaSyBx3ZhPjQjqLlEKk2N2UerErhCF14_8zgI",
    authDomain: "vuetutorial-3f258.firebaseapp.com",
    databaseURL: "https://vuetutorial-3f258.firebaseio.com",
    projectId: "vuetutorial-3f258",
    storageBucket: "vuetutorial-3f258.appspot.com",
    messagingSenderId: "781414057770"
  });


/* exports the variable db and directs firebase to use firestore.
 * so db will be firebase.firestore().etc.etc.etc.
 * we then need to import { db } from this file when we want to make
 * database calls
 */
export const db = firebase.firestore();
export const auth = firebase.auth();

let app;
auth.onAuthStateChanged( user => {
  if (!app) {
    app = new Vue({
      render: h => h(App),
      router,
    }).$mount('#app')
  }
})
