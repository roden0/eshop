import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "seres-shop.firebaseapp.com",
    databaseURL: "https://seres-shop.firebaseio.com",
    projectId: "seres-shop",
    storageBucket: "seres-shop.appspot.com",
    messagingSenderId: "86283460326",
    appId: "1:86283460326:web:a091d39fdb95a6251da527",
    measurementId: "G-KENXMKMFYR"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    promt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;