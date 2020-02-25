import firebase from "firebase/app";
import "firebase/firestore"; // for database
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCmurtt_R97G2Gj1cBsHqsQslr9GFvoiM",
  authDomain: "artwork-db.firebaseapp.com",
  databaseURL: "https://artwork-db.firebaseio.com",
  projectId: "artwork-db",
  storageBucket: "artwork-db.appspot.com",
  messagingSenderId: "58659264677",
  appId: "1:58659264677:web:72b5c5c4bd5c8f469b554c",
  measurementId: "G-FVZLHJX6QV"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
