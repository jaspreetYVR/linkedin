import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_gohekDy5I9OsE03daPJ61Rp9tsPIHxQ",
    authDomain: "linkedin-clone-ee444.firebaseapp.com",
    projectId: "linkedin-clone-ee444",
    storageBucket: "linkedin-clone-ee444.appspot.com",
    messagingSenderId: "452182017097",
    appId: "1:452182017097:web:4470f80dd5303e64ad6b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };