// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4hQs8KeM7k_nojb1uzITMq0KoNoPRNbw",
  authDomain: "e-commerce-99248.firebaseapp.com",
  projectId: "e-commerce-99248",
  storageBucket: "e-commerce-99248.appspot.com",
  messagingSenderId: "105084282561",
  appId: "1:105084282561:web:654ab0215438cf1bd59640",
  measurementId: "G-PY0BMNS8Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFireStore(app);
export default fireDB
