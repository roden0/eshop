import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

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
        var userRef,
        snap;
        if(userAuth){
            userRef = firestore.doc(`users/${userAuth.uid}`);
            snap = await userRef.get();

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

/**
 * Used to set at firestore items
 * @param {String} key 
 * @param {Array} items 
 */
export const addCollectionToFirestore = async (key, items) =>{
    const collectionRef =  firestore.collection(key);
    const batch = firestore.batch();
    items.forEach(item => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, item);
    });

    return await batch.commit()
}

const addCollectionRouteName = doc => {
        
    const { title, items } = doc.data();

    return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
    }
}

const setCollectionTitleAsKey = (accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
}

export const convertCollectionsSnapshotToMap = (collections) =>{

    const transformedCollection = collections.docs.map(addCollectionRouteName);

    return transformedCollection.reduce(setCollectionTitleAsKey,{});
}   

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    promt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;