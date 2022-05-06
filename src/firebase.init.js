// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt-rGK6tYjGEcUydZjSQUYJGIipZtb-io",
  authDomain: "wirehouse-cbe76.firebaseapp.com",
  projectId: "wirehouse-cbe76",
  storageBucket: "wirehouse-cbe76.appspot.com",
  messagingSenderId: "679281777396",
  appId: "1:679281777396:web:129860a0921d945f151ca1",
  measurementId: "G-E146TRZLJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
