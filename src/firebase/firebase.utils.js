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


export const checkAuth = () => {
    return new Promise((resolve, reject)=>{
        const unsuscribe = auth.onAuthStateChanged(auth=>{
            unsuscribe();
            resolve(auth)
        }, reject)
    });
}

/**
 * Create user on firestore with auth object and additional data
 * @param {*} userAuth 
 * @param {*} additionalData 
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.error('error creating user', error.message);
      }
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

/**
 * 
 * @param {*} doc 
 */
const addCollectionRouteName = doc => {
        
    const { title, items } = doc.data();

    return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
    }
}

/**
 * 
 * @param {*} accumulator 
 * @param {*} collection 
 */
const setCollectionTitleAsKey = (accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
}

/**
 * 
 * @param {*} collections 
 */
export const convertCollectionsSnapshotToMap = (collections) =>{

    const transformedCollection = collections.docs.map(addCollectionRouteName);

    return transformedCollection.reduce(setCollectionTitleAsKey,{});
}   

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    promt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;