import { useEffect, useState } from "react";
import { Wishlist, WishItem } from "../components/wishlist/Wishlist";
import { getAllWishlists } from "../components/wishlist/wishlists";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export const Wishlists = () => {
  const [filter, setFilter] = useState("drinks");
  const [wishlists, setWishlists] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    async function fetchWishlists() {
      const allWishlists = await getAllWishlists();
      if (allWishlists) {
        setWishlists(allWishlists);
      }
    }
    fetchWishlists();
  }, []);

  return (
    <div className="bg-orange-100 md:px-20 xl:px-60 min-h-full">
      <div class="flex py-10 justify-between">
        {user ? (
          <>
            <h2 className="text-5xl text-left ">Your wishlists</h2>
            <input
              placeholder="Search recipes..."
              className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm  h-auto"
            />
          </>
        ) : (
          <div>
            <h2 className="text-5xl text-left ">
              Please log in to use whislists
            </h2>
            <p className="text-left text-xl mt-7 ">
              Over here you can create lists of your favourite recipes. Imagine
              finding those exact pancakes that would make an excellent sunday
              morning dish. Create a special Sunday list and add the recipe to
              your list, so you would find those pancakes easily with just a
              couple of clicks!
            </p>
          </div>
        )}
      </div>
      {user && (
        <div>
          {wishlists.map((list) => (
            <Wishlist title={"new list"}>
              {list.map((recipe) => (
                <WishItem recipe={recipe} />
              ))}
            </Wishlist>
          ))}
        </div>
      )}
    </div>
  );
};
