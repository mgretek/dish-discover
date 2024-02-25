import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export async function createWishlist() {}

export async function addToWishlist(listId, recipe) {
  console.log(listId);
  console.log(recipe);
}

export async function loadWishlists() {}
