// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNhrznExRpBlo-FIrGIRYXskH8orfNyCI",
  authDomain: "movieflixgpt-d56b7.firebaseapp.com",
  projectId: "movieflixgpt-d56b7",
  storageBucket: "movieflixgpt-d56b7.appspot.com", // ✅ fixed
  messagingSenderId: "207393114887",
  appId: "1:207393114887:web:42c5509806715ad91b53a2",
  measurementId: "G-3DGT3271F3" // only needed if using Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Optional: Firebase Analytics
// const analytics = getAnalytics(app);
