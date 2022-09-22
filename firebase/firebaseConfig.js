// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"

/**
 * Added required SDKs but keeping it for future reference.
 */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmbDSAe5h2OGMJXbP5w8-NealA81uusus",
  authDomain: "twitter-b7e65.firebaseapp.com",
  projectId: "twitter-b7e65",
  storageBucket: "twitter-b7e65.appspot.com",
  messagingSenderId: "678357277801",
  appId: "1:678357277801:web:0acd62cdf3df141a0256f8",
  measurementId: "G-Z6636F6084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);