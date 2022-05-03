// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtYKpWdm2KAyG55AYQULD8KS8N2Y_mV5I",
  authDomain: "electronic-warehouse.firebaseapp.com",
  projectId: "electronic-warehouse",
  storageBucket: "electronic-warehouse.appspot.com",
  messagingSenderId: "125755545692",
  appId: "1:125755545692:web:1e5bddba5bf2f29f6fae99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;