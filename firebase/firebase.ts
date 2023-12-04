// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTHrA7BP2mQfn7kuzAETVntUu0Bl2cKY",
  authDomain: "acendi-rebuild.firebaseapp.com",
  projectId: "acendi-rebuild",
  storageBucket: "acendi-rebuild.appspot.com",
  messagingSenderId: "537585738332",
  appId: "1:537585738332:web:63773ef77c89f160c0bc99",
  measurementId: "G-3ZGJTJ8BN4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth, app as firebase };
