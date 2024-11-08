// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFCQXwfySQ8kP5HA2fUt9MOA8efvXuZIw",
  authDomain: "netflixgpt-7fe3a.firebaseapp.com",
  projectId: "netflixgpt-7fe3a",
  storageBucket: "netflixgpt-7fe3a.firebasestorage.app",
  messagingSenderId: "25916036742",
  appId: "1:25916036742:web:126ba91096c00db112e307",
  measurementId: "G-PMZG3YC65L",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
