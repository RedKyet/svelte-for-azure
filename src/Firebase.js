// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7Fo2g48BCKwkFppSnAdIJJGZHE8uvrvo",
  authDomain: "sensors2-14a1e.firebaseapp.com",
  databaseURL: "https://sensors2-14a1e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sensors2-14a1e",
  storageBucket: "sensors2-14a1e.appspot.com",
  messagingSenderId: "50272047400",
  appId: "1:50272047400:web:47b820904e6cb6fec9c01d",
  measurementId: "G-B1SMGZQB0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);