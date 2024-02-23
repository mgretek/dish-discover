import React from "react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-b from-violet-200 to-pink-200">
      <div className="mx-8 mb-6 mt-8 text-gray-700">
        <div className="font-extrabold text-2xl">Wish Dish Discover</div>
        <div className="flex justify-between mb-2 flex-wrap md:flex-nowrap">
          <div>
            <div className="mt-6 max-w-[80%] mb-8">
              Discover meals & cocktails, add to wishlists and generate
              automatic shopping lists.
            </div>
          </div>
          <div className="flex gap-16 mb-4">
            <div>
              <div className="font-extrabold mb-2">Discover more</div>
              <div className="text-sm mb-2">Wishlist</div>
              <div className="text-sm mb-2">Shopping list</div>
            </div>
            <div>
              <div className="font-extrabold mb-2">Useful</div>
              <div className="text-sm mb-2">Terms & Conditions</div>
              <div className="text-sm mb-2">Links to GitHub orsmth</div>
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
