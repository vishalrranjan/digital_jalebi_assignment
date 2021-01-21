import dotenv from 'dotenv';
import firebase from 'firebase'

dotenv.config();
var firebaseConfig = {
    apiKey: "AIzaSyCG-vczHRDRu8l9F-DJTsDNKJxYnUkF9ZY",
    // apiKey: process.env.API_Key,
    authDomain: "todoauth-425f1.firebaseapp.com",
    projectId: "todoauth-425f1",
    storageBucket: "todoauth-425f1.appspot.com",
    messagingSenderId: "1058321051342",
    appId: "1:1058321051342:web:36817bf382b70e67292a9f",
    measurementId: "G-LBB3FM7GJX"
  };

const firestore = firebase.initializeApp(firebaseConfig);

export default firestore;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   var firebaseConfig = {

//     apiKey: "AIzaSyCG-vczHRDRu8l9F-DJTsDNKJxYnUkF9ZY",
//     authDomain: "todoauth-425f1.firebaseapp.com",
//     projectId: "todoauth-425f1",
//     storageBucket: "todoauth-425f1.appspot.com",
//     messagingSenderId: "1058321051342",
//     appId: "1:1058321051342:web:36817bf382b70e67292a9f",
//     measurementId: "G-LBB3FM7GJX"

//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>