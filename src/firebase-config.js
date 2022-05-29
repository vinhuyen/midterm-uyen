import {initializeApp} from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJwHrcsAd9E3l0rLxR1cn0B4FqmA1m_AA",
    authDomain: "midterm-uyen.firebaseapp.com",
    projectId: "midterm-uyen",
    storageBucket: "midterm-uyen.appspot.com",
    messagingSenderId: "1063353193011",
    appId: "1:1063353193011:web:1491c3bc6a80ba1fa68946",
    measurementId: "G-Z6NT17PMF1"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);