// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2c7a1.firebaseapp.com",
  projectId: "mern-blog-2c7a1",
  storageBucket: "mern-blog-2c7a1.appspot.com",
  messagingSenderId: "288090768472",
  appId: "1:288090768472:web:07b8203d95b8b13023f62d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

