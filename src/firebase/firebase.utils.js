import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBjP0NvGB3-9tF2b4jTozeQ2_rjG4mei4Y",
    authDomain: "premium-db.firebaseapp.com",
    databaseURL: "https://premium-db.firebaseio.com",
    projectId: "premium-db",
    storageBucket: "premium-db.appspot.com",
    messagingSenderId: "372947098193",
    appId: "1:372947098193:web:54af690b57bcc26f27f670",
    measurementId: "G-560QWPXKTZ"
  };
   export const createUserProfileDocument = async(userAuth, additionalData)=>{
     if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();



     if(!snapShot.exists){
         const{displayName, email} = userAuth;
         const createdAt = new Date();
         try{
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
         }catch(error){
           console.log('error creating user',error.message);
         } 
     }
     return userRef;
   }
   export const addCollectionAndDocuments =async (collectionKey, objectsToAdd)=>{
       const collectionRef = firestore.collection(collectionKey) 
       const batch = firestore.batch();
       objectsToAdd.forEach(obj=>{
          const newDocRef = collectionRef.doc(obj.title);
          batch.set(newDocRef, obj);
       });
       return await batch.commit();
   }

  export const convertCollectionsSnapshotToMap=(collections)=>{
      const transFormedCollection = collections.docs.map(doc=>{
          const {title, items} = doc.data();
          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
      })
      return transFormedCollection.reduce((accumulator,collection)=>{
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      },{})
   }

   export const getCurrentUser=()=>{
     return new Promise((resolve, reject)=>{
        const unSubscribe = auth.onAuthStateChanged(userAuth=>{
            unSubscribe();
            resolve(userAuth);
        },reject)
     });
   }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(googleProvider);
  export default firebase;