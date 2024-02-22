import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

export async function createWishlist() {}

export async function addToWishlist(listId, recipe) {}

export async function loadWishlists() {}
