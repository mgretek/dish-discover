import React, { useState, useEffect } from "react";
import { DownArrow } from "../arrows/DownArrow";
import { ForwardArrow } from "../arrows/ForwardArrow";
import { PencilIcon } from "../icons/PencilIcon";

export const Wishlist = ({
  title,
  children,
  saveTitle,
  list,
  listIndex,
  handleDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const [wishlist, setWishlist] = useState(list);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [titleEditActive, setTitleEditActive] = useState(false);

  function handleTitleEdit() {
    setTitleEditActive(!titleEditActive);
    saveTitle({ newTitle: listTitle, listIndex: listIndex });
    setIsHovered(false);
  }

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="text-left mb-3">
      <div class="flex bg-gradient-to-r from-indigo-100 via-indigo-200 to-violet-200 rounded-full justify-between items-center px-4 py-3 mb-3">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!titleEditActive ? (
            <h1 className="text-xlflex-2 uppercase tracking-wider mr-2">
              {listTitle}
            </h1>
          ) : (
            <div className="flex">
              <input
                className="border rounded-sm"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
              ></input>
              <button
                className="bg-gray-300 text-sm px-4 ml-3 rounded-sm"
                onClick={handleTitleEdit}
              >
                Save
              </button>
            </div>
          )}
          {isHovered && !titleEditActive && (
            <PencilIcon onClick={handleTitleEdit} />
          )}
        </div>

        {isCollapsed ? (
          <ForwardArrow onClick={toggleCollapse} />
        ) : (
          <DownArrow onClick={toggleCollapse} />
        )}
      </div>
      <div className={` wishlist ${isCollapsed ? "" : "open"}`}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {list.length > 0 &&
            list.map((recipe, itemIndex) => (
              <div key={recipe.id}>
                <WishItem
                  recipe={recipe}
                  listIndex={listIndex}
                  itemIndex={itemIndex}
                  handleDelete={handleDelete}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export const WishItem = ({ recipe, listIndex, itemIndex, handleDelete }) => {
  return (
    <div className="bg-white p-5 flex flex-col shadow-xl">
      <div class="flex  items-center">
        <h2 className="text-2xl mr-3">{recipe.title}</h2>
        <button
          className="ml-auto"
          onClick={() =>
            handleDelete({ recipeId: recipe.id, listIndex: listIndex })
          }
        >
          X
        </button>
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
