// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFtvXyes4zyj-WzqUtJiCmxihxjFvclrE",
  authDomain: "granproyectosvelte.firebaseapp.com",
  projectId: "granproyectosvelte",
  storageBucket: "granproyectosvelte.appspot.com",
  messagingSenderId: "681271183152",
  appId: "1:681271183152:web:c9533ce5772ae8c9da2af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
