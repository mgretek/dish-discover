import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCnNi5Gnj9cylB2qzQEm6NT_bP1OuvIlpw",
  authDomain: "wishdish-1003f.firebaseapp.com",
  projectId: "wishdish-1003f",
  storageBucket: "wishdish-1003f.appspot.com",
  messagingSenderId: "741521337319",
  appId: "1:741521337319:web:c4e11147e54bcbe2ec2b42",
  measurementId: "G-FB8YRS4NT0",
  databaseURL: "https://wishdish-1003f-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
