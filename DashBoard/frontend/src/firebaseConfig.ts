// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD9pPFym4Rxn_D8zk7cPhAjyyzoUWXPNk",
  authDomain: "codecrafter-351ad.firebaseapp.com",
  projectId: "codecrafter-351ad",
  storageBucket: "codecrafter-351ad.firebasestorage.app",
  messagingSenderId: "1041609455778",
  appId: "1:1041609455778:web:1f9bfb429f73f21c1d3ffb",
  measurementId: "G-9DWJLH324P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export necessary modules
export { auth, provider, signInWithPopup };
