import React, { useState } from "react";
import { DownArrow } from "./DownArrow";
import { ForwardArrow } from "./ForwardArrow";

export const Wishlist = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="text-left mb-3">
      <div class="flex bg-white justify-between items-center px-4 py-3 mb-3">
        <h1 className="text-xl bg-white flex-2 uppercase tracking-wider">
          {title}
        </h1>

        {isCollapsed ? (
          <ForwardArrow onClick={toggleCollapse} />
        ) : (
          <DownArrow onClick={toggleCollapse} />
        )}
      </div>
      <div className={` wishlist ${isCollapsed ? "" : "open"}`}>
        <div className="grid grid-cols-1    xl:grid-cols-3 gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};
export const WishItem = ({ recipe }) => {
  console.log("recipe is", recipe);
  return (
    <div className="bg-white   p-5 flex flex-col">
      <div class="flex  items-center">
        <h2 className="text-2xl mr-3">{recipe.title}</h2>
        <button className="ml-auto">X</button>
      </div>
      <div class="flex">
        <p>Time: {recipe.readyInMinutes} min</p>
        <p className="mx-3">|</p>
        <h3>Ingredients: 4</h3>
      </div>
      <div className=" bg-orange-500 aspect-square max-h-40 mt-4 overflow-hidden">
        <img src={recipe.image} alt={recipe.title} />
      </div>
    </div>
  );
};
