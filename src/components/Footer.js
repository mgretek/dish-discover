import React from "react";

export const Footer = () => {
  return (
    <div className="mt-8 w-full bg-gradient-to-b from-violet-200 to-pink-200">
      <div className="mx-8 mb-6 mt-8 text-gray-700 xl:max-w-6xl xl:mx-auto">
        <div className="font-extrabold text-2xl ">Wish Dish Discover</div>
        <div className="flex md:gap-x-2.5 lg:gap-x-10 mb-2 flex-wrap md:flex-nowrap">
          <div>
            <div className="mt-6 max-w-[80%] mb-8">
              Discover thousands of meals, drinks & cocktails, add them to
              wishlists and generate automatic shopping lists.
            </div>
          </div>
          <div className="flex gap-x-16 lg:gap-x-36 xl:gap-x-48 2xl:gap-x-64 mb-4">
            <div>
              <div className="truncate font-extrabold mb-2">Discover more</div>
              <div className="text-sm mb-2">Wishlist</div>
              <div className="text-sm mb-2">Shopping list</div>
            </div>
            <div>
              <div className="font-extrabold mb-2">Useful</div>
              <div className="truncate text-sm mb-2">Terms & Conditions</div>
              <div className="truncate text-sm mb-2">
                Links to GitHub orsmth
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm">
          © 2024 by Fredi Karu, Merilin-Grete Kakko, Voldemar Tamm
        </div>
      </div>
    </div>
  );
};
