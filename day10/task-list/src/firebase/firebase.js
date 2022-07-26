// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSz1TUhgINLiiDXhjmnA3w3TUDAz6-vXk",
  authDomain: "task-list-ix.firebaseapp.com",
  projectId: "task-list-ix",
  storageBucket: "task-list-ix.appspot.com",
  messagingSenderId: "297940695005",
  appId: "1:297940695005:web:4f9ff1e218ac02b5886834",
  measurementId: "G-Z6YM751EB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };