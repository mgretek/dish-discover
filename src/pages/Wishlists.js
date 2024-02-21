import { Wishlist, WishItem } from "../components/Wishlist";

export const Wishlists = () => {
  return (
    <div className="bg-orange-100 md:px-20 lg:px-60">
      <h2 className="text-5xl text-left">Your wishlists</h2>
      <Wishlist title={"Dinner"}>
        <WishItem />
        <WishItem />
        <WishItem />
      </Wishlist>
      <Wishlist title={"Birthday party"}>
        <WishItem />
        <WishItem />
      </Wishlist>
    </div>
  );
};
