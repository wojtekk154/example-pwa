import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyA4jvFU2aqRRHxdq-pOIL5vNeYUQgiNmR8",
    authDomain: "example-pwa-9cddc.firebaseapp.com",
    databaseURL: "https://example-pwa-9cddc.firebaseio.com",
    projectId: "example-pwa-9cddc",
    storageBucket: "example-pwa-9cddc.appspot.com",
    messagingSenderId: "928853152562"
};
const rootFb = firebase.initializeApp(config);

export {rootFb}