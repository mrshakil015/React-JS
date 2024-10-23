// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bVKZqSfAusZMjO7j6wUO9WZblzZF_Vw",
  authDomain: "eact-dragon-news-auth.firebaseapp.com",
  projectId: "eact-dragon-news-auth",
  storageBucket: "eact-dragon-news-auth.appspot.com",
  messagingSenderId: "491014026641",
  appId: "1:491014026641:web:a29b1b8fa404ec854a5630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;