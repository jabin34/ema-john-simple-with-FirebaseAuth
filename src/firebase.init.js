// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTyEsex9ra3MqgHjNOQepg_9hQ7Gv264",
  authDomain: "ema-john-simple-f4bc2.firebaseapp.com",
  projectId: "ema-john-simple-f4bc2",
  storageBucket: "ema-john-simple-f4bc2.appspot.com",
  messagingSenderId: "125040202202",
  appId: "1:125040202202:web:582c052af40a818d8070e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;