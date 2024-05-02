// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBGPyG-ZvB2ssmWSjQblIY0YjVtjwRfJYw",
    authDomain: "it35-sy.firebaseapp.com",
    projectId: "it35-sy",
    storageBucket: "it35-sy.appspot.com",
    messagingSenderId: "451864011678",
    appId: "1:451864011678:web:467f91a696246f1863ac8f",
    measurementId: "G-MV6T1T3GHM"
  };

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}