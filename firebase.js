import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD8lLfxWZN55ieUI4CbWjcK_nT2uyvu5LA",
  authDomain: "react-native-instagram-3d4c0.firebaseapp.com",
  projectId: "react-native-instagram-3d4c0",
  storageBucket: "react-native-instagram-3d4c0.appspot.com",
  messagingSenderId: "309855224529",
  appId: "1:309855224529:web:5cdf2896b856b58b787bf0",
  measurementId: "G-DDXGXX3G26",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
export { firebase, db };
