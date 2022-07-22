// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlkDByo8WHdHoB947q--22AC5zyVodnyg",
  authDomain: "library-ix.firebaseapp.com",
  projectId: "library-ix",
  storageBucket: "library-ix.appspot.com",
  messagingSenderId: "469701173584",
  appId: "1:469701173584:web:ef27de3552f77e98270c55",
  measurementId: "G-F63WXC59V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore}