 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDAmM8_tWwtlXAgIWj8D9oRv0cjAXRLc-0",
    authDomain: "geo-app-98d5a.firebaseapp.com",
    databaseURL: "https://geo-app-98d5a.firebaseio.com",
    projectId: "geo-app-98d5a",
    storageBucket: "geo-app-98d5a.appspot.com",
    messagingSenderId: "185023318603",
    appId: "1:185023318603:web:d87e4560ef0067d3489bce"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()