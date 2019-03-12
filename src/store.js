import Vue from 'vue'
import Vuex from 'vuex'

const firebase = require('./firebaseConfig.js')

Vue.use(Vuex)

firebase.auth.onAuthStateChanged(user => {
	if (user) {
		store.commit('setCurrentUser', user)
		store.dispatch('fetchUserProfile')
	}
})

export const store = new Vuex.Store({
	state: {
		currentUser: null,
		userProfile: {}
	},
	mutations: {
		setCurrentUser(state, val) {
			state.currentUser = val
		},
		setUserProfile(state, val) {
			state.userProfile = val
		}
	},
	actions: {
		fetchUserProfile({
			commit,
			state
		}) {
			firebase.usersCollection.doc(state.currentUser.uid).get().then(res => {
				commit('setUserProfile', res.data())
			}).catch(err => {
				console.log(err)
			})
		},
		clearData({
			commit
		}) {
			commit('setCurrentUser', null)
			commit('setUserProfile', {})
		}
	}
})