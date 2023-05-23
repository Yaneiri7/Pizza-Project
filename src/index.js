//Importing Firebase SDK functions
import {initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

//Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBS6mJNl7o7Z4pTGIr_r0r7416cOCDhhKo",
  authDomain: "pizza-88dfe.firebaseapp.com",
  databaseURL: "https://pizza-88dfe-default-rtdb.firebaseio.com",
  projectId: "pizza-88dfe",
  storageBucket: "pizza-88dfe.appspot.com",
  messagingSenderId: "623474127713",
  appId: "1:623474127713:web:b0efd09bfdf45ca7450b20",
  measurementId: "G-QT4TYTL2DB"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);