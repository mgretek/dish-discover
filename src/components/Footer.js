import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="mt-8 pt-6 pb-6 w-full bg-gradient-to-b from-violet-200 to-pink-200 overflow-hidden">
      <div className="md:mx-3 text-gray-700 xl:max-w-6xl xl:mx-auto max-w-[576px] md:max-w-full mx-auto px-3">
        <div className="font-extrabold text-2xl mb-4">Wish Dish Discover</div>
        <div className="flex md:gap-x-2.5 lg:gap-x-10 mb-2 flex-wrap ">
          <div>
            <div className="mt-6 max-w-full md:max-w-[80%] mb-8">
              Discover thousands of meals, drinks & cocktails, add them to
              wishlists and generate automatic shopping lists.
            </div>
          </div>
          <div className="flex gap-x-16 lg:gap-x-36 xl:gap-x-48 2xl:gap-x-64 mb-4">
            <div className="flex flex-col">
              <div className="truncate font-extrabold mb-2">Discover more</div>
              <Link to="/wishlists" className="text-sm mb-2">
                Wishlists
              </Link>
              <Link to="/shoppinglist" className="text-sm mb-2">
                Shopping list
              </Link>
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
