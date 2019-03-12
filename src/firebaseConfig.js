import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyBaBjeXRfBsVrjmoFl6wKnAXlnJmaY0G4o",
    authDomain: "vue-social-network-b49da.firebaseapp.com",
    databaseURL: "https://vue-social-network-b49da.firebaseio.com",
    projectId: "vue-social-network-b49da",
    storageBucket: "vue-social-network-b49da.appspot.com",
    messagingSenderId: "641009905873"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
/* const settings = {
    timestampsInSnapshots: true
}

db.settings(settings) */

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}