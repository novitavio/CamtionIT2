import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
firebase.initializeApp({
  apiKey: "AIzaSyCLCGaYCni8I9oRkd8z0aROwa4nE1VPn5A",
  authDomain: "camtion-it2.firebaseapp.com",
  databaseURL: "https://camtion-it2-default-rtdb.firebaseio.com",
  projectId: "camtion-it2",
  storageBucket: "camtion-it2.appspot.com",
  messagingSenderId: "830888120846",
  appId: "1:830888120846:web:49f9f6289f37cc76cfe25f",
  measurementId: "G-3FC65Y1E3B"
});

const FIREBASE = firebase;

export default FIREBASE;