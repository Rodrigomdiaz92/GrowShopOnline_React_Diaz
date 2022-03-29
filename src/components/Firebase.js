// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWApGVP2uq2HoBTREaAbT0YXS8Rh35oSc",
  authDomain: "growshop-online.firebaseapp.com",
  projectId: "growshop-online",
  storageBucket: "growshop-online.appspot.com",
  messagingSenderId: "929506675230",
  appId: "1:929506675230:web:ec7a170fe04b8854fabc0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
