// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBauAcXKz1QoIguv1rNGAxKeg0JreI0di8",
  authDomain: "oinvoice-627a8.firebaseapp.com",
  projectId: "oinvoice-627a8",
  storageBucket: "oinvoice-627a8.appspot.com",
  messagingSenderId: "265509411850",
  appId: "1:265509411850:web:93b94adb89fa7b4d10d3f3",
  measurementId: "G-V54DWZ9X7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {analytics,auth}