// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA22z_SbHfYkpLrsoQ6SpPok9Hu-9oEzs",
    authDomain: "passionforfashion-64fa8.firebaseapp.com",
    projectId: "passionforfashion-64fa8",
    storageBucket: "passionforfashion-64fa8.appspot.com",
    messagingSenderId: "997655593074",
    appId: "1:997655593074:web:f1f5bfcbebcecafba482eb",
    measurementId: "G-4W893VPZ7M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const { getDefaultConfig } = require('@expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push('cjs');

// module.exports = defaultConfig;

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };