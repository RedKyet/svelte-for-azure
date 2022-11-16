import { error } from '@sveltejs/kit';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, get, child } from "firebase/database";
/** @type {import('./$types').RequestHandler} */
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQGxZdMZAZaCtUIZ8iTPLlrE8jbfR73e4",
  authDomain: "sensors-82505.firebaseapp.com",
  databaseURL: "https://sensors-82505-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sensors-82505",
  storageBucket: "sensors-82505.appspot.com",
  messagingSenderId: "988668510469",
  appId: "1:988668510469:web:d8af30a7365556ee34776c",
  measurementId: "G-V8W494YYYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }


const db = getDatabase();
let data
const starCountRef = ref(db, 'data');
onValue(starCountRef, (snapshot) => {
  data = snapshot.val();
});
export function GET() {
return new Response(JSON.stringify(data), {status:200});
}