import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_URL,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER,
    appId: process.env.REACT_APP_APP,
    measurementId: process.env.REACT_APP_MEASUREMENT
};

export const createUserProfileDocument = async (userAuth, data) => {
    try{
        console.log('FIREBASE CONF');
        console.log(firebaseConfig);
        var userRef,
        snap;
        if(userAuth){
            userRef = firestore.doc(`users/${userAuth.uid}`);
            snap = await userRef.get();

            console.log(snap);
            console.log(snap.exists);

            if(!snap.exists){
                let {displayName, email} = userAuth;
                let createdAt = new Date();

                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...data
                });
            }
        }
    }catch(e){
        console.error(`FIREBASE@createUserProfileDocument: ${e}`);
    }
    return userRef;
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