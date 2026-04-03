// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA9OdQzJPer35fI7q4GdjjgIhuoSvVzIA",
  authDomain: "auth-with-usecontext-70cf9.firebaseapp.com",
  projectId: "auth-with-usecontext-70cf9",
  storageBucket: "auth-with-usecontext-70cf9.firebasestorage.app",
  messagingSenderId: "1046525988745",
  appId: "1:1046525988745:web:50cc273a9e4c64de1f1b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)