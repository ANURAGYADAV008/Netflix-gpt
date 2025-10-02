// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIRE_BASECONFIG } from "./Constants";
// import { getAnalytics } from "firebase/analytics"; // optional

// Your web app's Firebase configuration
const firebaseConfig=FIRE_BASECONFIG;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Optional: Firebase Analytics
// const analytics = getAnalytics(app);
