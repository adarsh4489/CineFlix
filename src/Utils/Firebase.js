// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB47KVQkUpcsVW5vbtwBXYlXIBF-aXLH8U",
  authDomain: "cineflix-8d8a7.firebaseapp.com",
  projectId: "cineflix-8d8a7",
  storageBucket: "cineflix-8d8a7.firebasestorage.app",
  messagingSenderId: "775200275939",
  appId: "1:775200275939:web:2d20ec1ed4a3ae1856b4d6",
  measurementId: "G-9NXR1H7C5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();