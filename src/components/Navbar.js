import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Settings } from "./Settings";
import { MenuButton } from "./MenuButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-neutral-50 via-pink-200 to-violet-200 px-4 pt-4 pb-2 md:p-4 flex flex-wrap md:flex-nowrap justify-between gap-y-3 md:gap-6">
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent"
      >
        Wish Dish Discover
      </Link>

      <MenuButton isOpen={isOpen} onClick={handleClick} />

      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`md:flex gap-2 md:gap-6 items-center`}>
          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/recipes"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500"
            >
              Recipes
            </CustomLink>
          </div>
          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/wishlists"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500"
            >
              Wishlist
            </CustomLink>
          </div>
          <div className="mb-4 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/shoppinglist"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500"
            >
              Shopping list
            </CustomLink>
          </div>

          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <span className="text-lg md:text-md text-gray-600 font-semibold">
              <Settings />
            </span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
