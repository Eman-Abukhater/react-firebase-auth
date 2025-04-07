// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

export default app;