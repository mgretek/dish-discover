import React from "react";
import { MenuClosedIcon } from "./icons/MenuClosedIcon";
import { MenuOpenIcon } from "./icons/MenuOpenIcon";

export const MenuButton = ({ isOpen, onClick }) => {
  return (
    <div className="flex self-center md:hidden">
      <button onClick={onClick} className="flex items-center px-3 py-2">
        {isOpen ? (
          <MenuOpenIcon className="fill-current h-6 w-6 text-violet-500 block" />
        ) : (
          <MenuClosedIcon className="fill-current w-6 h-6 text-gray-500 block" />
        )}
      </button>
    </div>
  );
};
