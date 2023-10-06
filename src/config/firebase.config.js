import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3G1Rp_UAxrYEa5DTnrI81aiU66PXIvds",
  authDomain: "dragon-news-94b86.firebaseapp.com",
  projectId: "dragon-news-94b86",
  storageBucket: "dragon-news-94b86.appspot.com",
  messagingSenderId: "183404107951",
  appId: "1:183404107951:web:7c61d74abcee3d59859c5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
