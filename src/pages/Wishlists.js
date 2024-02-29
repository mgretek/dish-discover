import { useEffect, useState } from "react";
import { Wishlist, WishItem } from "../components/Wishlist";
import { getAllWishlists } from "../wishlists";

export const Wishlists = () => {
  const [filter, setFilter] = useState("drinks");
  const [wishlists, setWishlists] = useState([]);

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
        <h2 className="text-5xl text-left ">Your wishlists</h2>
        <input
          placeholder="Search recipes..."
          className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm  h-auto"
        ></input>
      </div>
      {wishlists.map((list) => (
        <Wishlist title={"new list"}>
          {list.map((recipe) => (
            <WishItem recipe={recipe} />
          ))}
        </Wishlist>
      ))}
    </div>
  );
};
