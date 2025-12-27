// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSoUWtlIJ-F7Jm81K4eDzNBIQcWmsKWEo",
  authDomain: "dbms-1e0e3.firebaseapp.com",
  projectId: "dbms-1e0e3",
  storageBucket: "dbms-1e0e3.firebasestorage.app",
  messagingSenderId: "465369181058",
  appId: "1:465369181058:web:b945da74647ff51d2fbd9b",
  measurementId: "G-BCMVFC2VR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);