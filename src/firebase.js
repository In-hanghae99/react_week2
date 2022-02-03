// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgQWAkeJNrSsb_RhYbrPpNOK97V_WHihM",
  authDomain: "sparta-react-basic-6882f.firebaseapp.com",
  projectId: "sparta-react-basic-6882f",
  storageBucket: "sparta-react-basic-6882f.appspot.com",
  messagingSenderId: "1039492465815",
  appId: "1:1039492465815:web:85259e49634bc6c6c915d2",
  measurementId: "G-VSYDN1KQ2D",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
