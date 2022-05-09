// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLNn62a5qLgAzKNCKLoMIUVT81-xdkQko",
  authDomain: "fir-were-house.firebaseapp.com",
  projectId: "fir-were-house",
  storageBucket: "fir-were-house.appspot.com",
  messagingSenderId: "10496697254",
  appId: "1:10496697254:web:ac1d269f1293c567e6a567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;