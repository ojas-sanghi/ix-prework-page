// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnaaWfBGLqw64GGIQzIp6rC9vs-1Ob058",
  authDomain: "recipes-ix.firebaseapp.com",
  projectId: "recipes-ix",
  storageBucket: "recipes-ix.appspot.com",
  messagingSenderId: "101491426797",
  appId: "1:101491426797:web:1a76bcceda25c1252853e4",
  measurementId: "G-9Z06TEP1KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };