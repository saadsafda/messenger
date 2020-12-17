import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQi5PhlRiZ9OBFn5flzVa1v_8R1I5EyS8",
    authDomain: "messenger-a841c.firebaseapp.com",
    projectId: "messenger-a841c",
    storageBucket: "messenger-a841c.appspot.com",
    messagingSenderId: "930776112389",
    appId: "1:930776112389:web:bfcb4b03de91d892436b6c",
    measurementId: "G-P964E9VSVZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };