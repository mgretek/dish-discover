import { getDatabase, ref, set, get, child } from "firebase/database";
import { database } from "../../config/firebase";

export async function getAllWishlists(uid) {
  console.log("logging uid: ", uid);
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `users/${uid}/wishlists`));
  console.log("logging snapshot", snapshot.val());
  if (snapshot) {
    console.log("snapshot found here:", snapshot.val());
    return snapshot.val();
  } else {
    console.log("No lists found");
  }
}

export async function saveWishlist({ wishLists, uid }) {
  const db = getDatabase();
  const dbRef = ref(db, `users/${uid}/wishlists`);

  try {
    // Set the updated wishlist array back to the database
    await set(dbRef, wishLists);

    console.log("Wishlists updated!");
    return true;
  } catch (error) {
    console.error("Error updating wishlist:", error);
    return false;
  }
}
export async function removeFromWishlist(listId, recipe, uid) {
  const db = getDatabase();
  const dbRef = ref(db, `${uid}/wishlists/${listId}/recipes`);

  try {
    const wishlistSnapshot = await get(dbRef);
    let wishlistObj = wishlistSnapshot.val() || {};

    let wishlistArr = Object.values(wishlistObj);

    const filteredArr = wishlistArr.filter((item) => item.id !== recipe.id);

    await set(ref(db, `users/${uid}/wishlists/${listId}/recipes`), filteredArr);

    // console.log("Recipe added to wishlist:", recipe);
    return true;
  } catch (error) {
    // console.error("Error adding recipe to wishlist:", error);
    return false;
  }
}

export async function addToWishlist(listId, recipe, uid) {
  console.log("recievd userid:", uid);
  const db = getDatabase();
  const dbRef = ref(db, `users/${uid}/wishlists/${listId}/recipes`);

  try {
    // Retrieve the wishlist object from the database
    const wishlistSnapshot = await get(dbRef);
    let wishlistObj = wishlistSnapshot.val() || {};

    // Convert the object values into an array
    let wishlistArr = Object.values(wishlistObj);

    // Push the new recipe to the wishlist array
    wishlistArr.push(recipe);

    // Set the updated wishlist array back to the database
    await set(ref(db, `users/${uid}/wishlists/${listId}/recipes`), wishlistArr);

    console.log("Recipe added to wishlist:", recipe);
    return true;
  } catch (error) {
    console.error("Error adding recipe to wishlist:", error);
    return false;
  }
}
