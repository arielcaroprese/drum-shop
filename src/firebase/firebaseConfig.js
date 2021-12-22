// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7m4fIajePUBrUMt_kbq1fUsa56-96PQY",
  authDomain: "pantera-ada2d.firebaseapp.com",
  projectId: "pantera-ada2d",
  storageBucket: "pantera-ada2d.appspot.com",
  messagingSenderId: "843518665117",
  appId: "1:843518665117:web:ea5d57c9469dec9c420f74",
  measurementId: "G-FGWGVHWTL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
