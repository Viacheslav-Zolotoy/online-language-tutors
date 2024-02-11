// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/database";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD86xPXbia878VHRlCZ3uJsjrHDTY2XlC8",
  authDomain: "online-language-tutors.firebaseapp.com",
  databaseURL:
    "https://online-language-tutors-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-language-tutors",
  storageBucket: "online-language-tutors.appspot.com",
  messagingSenderId: "512898922726",
  appId: "1:512898922726:web:f13013927232673f6e2327",
  measurementId: "G-0RJMBT698M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
