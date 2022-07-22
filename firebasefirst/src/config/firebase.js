
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAHE-UbL3S7s9TGnU6YQ0tpcWdM4gaj0-w",
  authDomain: "fir-tester-c7523.firebaseapp.com",
  projectId: "fir-tester-c7523",
  storageBucket: "fir-tester-c7523.appspot.com",
  messagingSenderId: "111163418353",
  appId: "1:111163418353:web:12c7d9f090b9242543ab50"
};


export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);
