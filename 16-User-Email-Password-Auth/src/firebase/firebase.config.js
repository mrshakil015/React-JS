// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsl7Qq7m2Mz7APEFNyyXm4Tx5aU_42yqc",
  authDomain: "user-email-password-auth-93063.firebaseapp.com",
  projectId: "user-email-password-auth-93063",
  storageBucket: "user-email-password-auth-93063.appspot.com",
  messagingSenderId: "283749104342",
  appId: "1:283749104342:web:57bf386caf69d79891a777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;