import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxGXP-lHWQHDcppsgUL7pPyzZJ4CjCCss",
  authDomain: "tiktok-clone-7e435.firebaseapp.com",
  projectId: "tiktok-clone-7e435",
  storageBucket: "tiktok-clone-7e435.appspot.com",
  messagingSenderId: "879688819876",
  appId: "1:879688819876:web:9b6e76a2d780659e8c3231"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;