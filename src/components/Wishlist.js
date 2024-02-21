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
      <div class="flex bg-white justify-between px-4 py-3">
        <h1 className="text-3xl bg-white flex-2">{title}</h1>

        {isCollapsed ? (
          <ForwardArrow onClick={toggleCollapse} />
        ) : (
          <DownArrow onClick={toggleCollapse} />
        )}
      </div>
      {!isCollapsed && <div className="bg-orange-200 p-3">{children}</div>}
    </div>
  );
};
export const WishItem = () => {
  return (
    <div className="bg-white my-3 rounded-lg p-4">
      <h2 className="text-2xl">Potato salad</h2>
      <p>Time: 2min</p>
      <p>Tags: #breakfast #lunch #dinner</p>
    </div>
  );
};
