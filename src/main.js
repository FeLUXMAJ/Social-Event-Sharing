// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import { firebaseApp } from "./firebaseApp";
var VueMaterial = require('vue-material')

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    store: store,
    router,
    el: '#app',
    render: h => h(App)
})

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/dashboard');
    } else {
        router.replace('/login');
    }
})
