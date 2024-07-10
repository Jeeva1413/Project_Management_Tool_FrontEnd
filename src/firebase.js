// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "project-management-tool-54181.firebaseapp.com",
  projectId: "project-management-tool-54181",
  storageBucket: "project-management-tool-54181.appspot.com",
  messagingSenderId: "448735659174",
  appId: "1:448735659174:web:f1415f8b9ef99d75c66067"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);