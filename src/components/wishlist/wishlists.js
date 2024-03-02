import { getDatabase, ref, set, get, child } from "firebase/database";
import { database } from "../../config/firebase";

export async function createWishlist() {}

export async function getAllWishlists() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, "wishlists"));
  if (snapshot) {
    return snapshot.val();
  } else {
    console.log("No lists found");
  }
}

export async function addToWishlist(listId, recipe) {
  const db = getDatabase();
  const dbRef = ref(db, `wishlists/${listId}`);

  try {
    // Retrieve the wishlist object from the database
    const wishlistSnapshot = await get(dbRef);
    let wishlistObj = wishlistSnapshot.val() || {};

    // Convert the object values into an array
    let wishlistArr = Object.values(wishlistObj);

    // Push the new recipe to the wishlist array
    wishlistArr.push(recipe);

    // Set the updated wishlist array back to the database
    await set(ref(db, `wishlists/${listId}`), wishlistArr);

    console.log("Recipe added to wishlist:", recipe);
    return true;
  } catch (error) {
    console.error("Error adding recipe to wishlist:", error);
    return false;
  }
}

export async function loadWishlists() {}
