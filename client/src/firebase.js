// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-app-7c9a7.firebaseapp.com",
  projectId: "mern-auth-app-7c9a7",
  storageBucket: "mern-auth-app-7c9a7.appspot.com",
  messagingSenderId: "790802902280",
  appId: "1:790802902280:web:9dd6ab76ab38950917d0bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);