import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Settings } from "./Settings";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-neutral-50 via-pink-200 to-violet-200 px-4 pt-4 pb-2 md:p-4 flex flex-wrap md:flex-nowrap justify-between gap-y-3 md:gap-6">
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent"
      >
        Wish Dish Discover
      </Link>

      <div className="flex self-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2"
        >
          <svg
            className={`fill-current w-6 h-6 text-gray-500 ${
              isOpen ? "hidden" : "block"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
          <svg
            className={`fill-current h-6 w-6 text-gray-500 ${
              isOpen ? "block" : "hidden"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`md:flex gap-2 md:gap-6 items-center`}>
          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/recipes"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500 "
            >
              Recipes
            </CustomLink>
          </div>
          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/wishlists"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500 "
            >
              Wishlist
            </CustomLink>
          </div>
          <div className="mb-4 md:mb-0 pl-4 md:pl-0">
            <CustomLink
              to={"/shoppinglist"}
              className="text-lg md:text-md text-gray-600 hover:text-violet-500 "
            >
              Shopping list
            </CustomLink>
          </div>

          <div className="mb-1.5 md:mb-0 pl-4 md:pl-0">
            <Link className="text-lg md:text-md text-gray-600 font-semibold">
              <Settings />
            </Link>
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
