// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const fireDB = getFirestore(app);
export default fireDB
