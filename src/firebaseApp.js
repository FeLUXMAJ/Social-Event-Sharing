import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAcWXkSmCVSPo33g5Z7RA9VyzMXwEzJG_g",
    authDomain: "vuex-app1.firebaseapp.com",
    databaseURL: "https://vuex-app1.firebaseio.com",
    projectId: "vuex-app1",
    storageBucket: "vuex-app1.appspot.com",
    messagingSenderId: "940931263996"
};
export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');