import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOPvy5GYhewwbb2vSeNJ8FPwhXCLTVKA",
  authDomain: "myreactapp-809b3.firebaseapp.com",
  projectId: "myreactapp-809b3",
  storageBucket: "myreactapp-809b3.firebasestorage.app",
  messagingSenderId: "352235099242",
  appId: "1:352235099242:web:d5e9f213a3842ed471a613"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); //connect our app with firebase
export const auth = getAuth(app); //getAuth is a method that returns the authentication instance
export const googleProvider = new GoogleAuthProvider();// GoogleAuthProvider is a class that provides the Google authentication provider

