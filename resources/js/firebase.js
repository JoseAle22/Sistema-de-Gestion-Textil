// resources/js/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQUVfNnXYGwW89O81Ia3swJJKszia5uJw",
  authDomain: "sistema-gestion-textil.firebaseapp.com",
  projectId: "sistema-gestion-textil",
  storageBucket: "sistema-gestion-textil.firebasestorage.app",
  messagingSenderId: "102818785070",
  appId: "1:102818785070:web:cb65b60bb35882cc9c7cbf",
  measurementId: "G-RZETQND85R"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  addDoc,
  collection,
};