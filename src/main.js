import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
	store
} from './store.js'
const firebase = require('./firebaseConfig.js')

import './assets/bootstrap.css'

// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

let app

firebase.auth.onAuthStateChanged(user => {
	console.log(user)
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})

/* new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app') */