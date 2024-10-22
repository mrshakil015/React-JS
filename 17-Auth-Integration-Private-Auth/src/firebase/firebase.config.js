// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdk6e_coZtTkgmhywTiLICtsfnxBX3lgM",
  authDomain: "auth-integration-private-auth.firebaseapp.com",
  projectId: "auth-integration-private-auth",
  storageBucket: "auth-integration-private-auth.appspot.com",
  messagingSenderId: "952672699574",
  appId: "1:952672699574:web:002085d52981c3303fd217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;