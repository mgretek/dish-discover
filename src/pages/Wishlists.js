import { useEffect, useState } from "react";
import { Wishlist, WishItem } from "../components/wishlist/Wishlist";
import {
  getAllWishlists,
  saveWishlist,
} from "../components/wishlist/wishlists";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import CallToAction from "../components/wishlist/CallToAction";

export const Wishlists = () => {
  const [filter, setFilter] = useState("drinks");
  const [wishlists, setWishlists] = useState([]);
  const [user] = useAuthState(auth);
  const [titleEditActive, setTitleEditActive] = useState(false);

  useEffect(() => {
    async function fetchWishlists() {
      const allWishlists = await getAllWishlists();
      if (allWishlists) {
        setWishlists(allWishlists);
      }
    }
    fetchWishlists();
  }, []);

  // useEffect(() => {
  //   console.log("Saving wishlists...");
  //   console.log("Wishlists:", wishlists);
  //   saveWishlist({ wishLists: wishlists });
  // }, [wishlists]);

  function handleDelete({ recipeId, listIndex }) {
    const newArr = [...wishlists];
    newArr[listIndex].recipes = newArr[listIndex].recipes.filter(
      (item) => item.id !== recipeId
    );
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr });
  }

  function handleTitleEdit() {
    setTitleEditActive(!titleEditActive);
  }
  function saveTitle({ newTitle, listIndex }) {
    // Create a new array with a shallow copy of wishlists
    const newArr = [...wishlists];

    // Update the title of the wishlist at the specified index
    newArr[listIndex] = {
      ...newArr[listIndex], // Shallow copy of the wishlist object
      title: newTitle, // Update the title
    };

    // Update the state with the new array
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr });
  }

  return (
    <div className="md:px-20 xl:px-60 min-h-full">
      <div class="flex py-10 justify-between">
        {true ? (
          <>
            <h2
              className="text-5xl text-left font-bold"
              onClick={handleTitleEdit}
            >
              Your wishlists
            </h2>
            <button className="bg-gray-800 px-5 py-3 rounded-full font-bold text-white ml-auto mr-3">
              + New
            </button>
            <input
              placeholder="Search recipes..."
              className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm  h-auto"
            ></input>
          </>
        ) : (
          <CallToAction />
        )}
      </div>
      {true && (
        <div>
          {wishlists.length > 0 &&
            wishlists.map((list, index) => (
              <Wishlist
                title={list.title || "new list"}
                listIndex={index}
                list={list.recipes}
                handleDelete={handleDelete}
                saveTitle={saveTitle}
              ></Wishlist>
            ))}
        </div>
      )}
    </div>
  );
};
