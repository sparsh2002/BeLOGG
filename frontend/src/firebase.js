// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjXWMdq6pjLkxbU7PBBBtQU-5vyubfaKA",
  authDomain: "belogg-e9c5a.firebaseapp.com",
  projectId: "belogg-e9c5a",
  storageBucket: "belogg-e9c5a.appspot.com",
  messagingSenderId: "486583756134",
  appId: "1:486583756134:web:3d777e1c8a037fd10b14a7",
  measurementId: "G-KHY2RR3WRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth , provider}