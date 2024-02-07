// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5dFva24zsUylJQuDsJquWSdKUsJE58rc",
  authDomain: "cinefusion-5741f.firebaseapp.com",
  projectId: "cinefusion-5741f",
  storageBucket: "cinefusion-5741f.appspot.com",
  messagingSenderId: "170849873120",
  appId: "1:170849873120:web:470623236740a634743485",
  measurementId: "G-T0560KH9M5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
