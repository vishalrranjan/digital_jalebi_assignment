import firebase from 'firebase'
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCG-vczHRDRu8l9F-DJTsDNKJxYnUkF9ZY",
    authDomain: "todoauth-425f1.firebaseapp.com",
    projectId: "todoauth-425f1",
    storageBucket: "todoauth-425f1.appspot.com",
    messagingSenderId: "1058321051342",
    appId: "1:1058321051342:web:36817bf382b70e67292a9f",
    measurementId: "G-LBB3FM7GJX"
  };

firebase.initializeApp(firebaseConfig);

const firestoreDB = firebase.firestore();
const auth = firebase.auth();

export default firestoreDB;
export {auth};