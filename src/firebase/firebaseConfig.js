// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI_giNg5z0RcaYZMLEvIHwoTqLmZLvsGc",
  authDomain: "react-books-library-management.firebaseapp.com",
  projectId: "react-books-library-management",
  storageBucket: "react-books-library-management.firebasestorage.app",
  messagingSenderId: "304361676621",
  appId: "1:304361676621:web:86fd9969ac6e25cc356104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;