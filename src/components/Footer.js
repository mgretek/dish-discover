import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="mt-8 pt-6 pb-6 w-full bg-gradient-to-b from-violet-200 to-pink-200 overflow-hidden">
      <div className="text-gray-700 mx-auto px-4 xl:pl-20 md:pl-10">
        <div className="font-extrabold text-2xl mb-2">Wish Dish Discover</div>
        <div className="flex md:gap-x-2.5 lg:gap-x-10 mb-2 flex-wrap md:flex-nowrap justify-between">
          <div>
            <div className="mt-6 max-w-full md:max-w-[80%] mb-8">
              Discover thousands of meals, drinks & cocktails, add them to
              wishlists and generate automatic shopping lists.
            </div>
          </div>
          <div className="flex gap-x-16 mt-2 lg:gap-x-36 xl:gap-x-48 mb-4 xl:pr-32 md:pr-20 2xl:pr-48">
            <div className="flex flex-col">
              <div className="truncate font-extrabold mb-2">Discover more</div>
              <Link
                to="/wishlists"
                className="text-sm mb-2 hover:text-gray-800"
              >
                Wishlists
              </Link>
              <Link
                to="/shoppinglist"
                className="text-sm mb-2 hover:text-gray-800"
              >
                Shopping list
              </Link>
            </div>
            <div>
              <div className="font-extrabold mb-2">Useful</div>
              <div className="truncate text-sm mb-2 hover:text-gray-800">
                Terms & Conditions
              </div>
              <div className="truncate text-sm mb-2 hover:text-gray-800">
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
