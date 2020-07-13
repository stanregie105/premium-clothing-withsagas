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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  export default firebase;