// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQICaPkHB-PCr2w9mPUwBKXVUxDXObgq0",
  authDomain: "livenews-c09cc.firebaseapp.com",
  projectId: "livenews-c09cc",
  storageBucket: "livenews-c09cc.appspot.com",
  messagingSenderId: "793187678549",
  appId: "1:793187678549:web:321e10ed892658feeb97dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;