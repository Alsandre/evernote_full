// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const authDomain = import.meta.env.VITE_REACT_APP_AUTHDOMAIN
const projectId = import.meta.env.VITE_REACT_APP_PROJECTI
const storageBucket = import.meta.env.VITE_REACT_APP_STORAGEBUCKET
const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID
const appId = import.meta.env.VITE_REACT_APP_APPID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);