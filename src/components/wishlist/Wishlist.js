import React, { useState, useEffect } from "react";
import { DownArrow } from "../arrows/DownArrow";
import { Draggable } from "react-beautiful-dnd";
import { ForwardArrow } from "../arrows/ForwardArrow";
import { PencilIcon } from "../icons/PencilIcon";

export const Wishlist = ({ saveTitle, list, listIndex, handleDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [listTitle, setListTitle] = useState(list.title);
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
      <div className="flex bg-gradient-to-r from-indigo-100 via-indigo-200 to-violet-200 rounded-full justify-between items-center px-4 py-3 mb-3">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!titleEditActive ? (
            <div class="flex">
              <h1 className="text-xl flex-2 font-medium uppercase tracking-wider mr-2 ">
                {listTitle}
              </h1>
              <h1 className="text-sm flex-2 uppercase tracking-wider mr-2 ">
                {Array.isArray(list.recipes) > 0
                  ? `(${list.recipes.length})`
                  : "(0)"}
              </h1>
            </div>
          ) : (
            <div className="flex">
              <input
                className="border rounded-sm"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}
              ></input>
              <button
                className="bg-indigo-400 text-white text-sm px-4 ml-3 rounded-sm"
                onClick={handleTitleEdit}
              >
                Save title
              </button>
              <button
                className="bg-red-500 text-white text-sm px-4 ml-3 rounded-sm"
                onClick={console.log("delete happens here")}
              >
                Delete list
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
          {Array.isArray(list.recipes) &&
            list.recipes.length > 0 &&
            list.recipes.map((recipe, itemIndex) => (
              <WishItem
                id={recipe.id}
                recipe={recipe}
                listIndex={listIndex}
                itemIndex={itemIndex}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export const WishItem = ({
  recipe,
  listIndex,
  itemIndex,
  handleDelete,
  id,
}) => {
  return (
    <Draggable
      key={id} // Ensure a unique key
      draggableId={`${recipe.id}tt`} // Use recipe.id as draggableId
      index={itemIndex}
    >
      {(provided) => (
        <div
          className="bg-white p-5 m-1 flex flex-col shadow-md  border border-gray-200 rounded-xl hover:border-gray-400"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex  items-center">
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
          <div className="flex">
            <p>Time: {recipe.readyInMinutes} min</p>
            <p className="mx-3">|</p>
            <h3>Ingredients: 4</h3>
          </div>
          <div className=" aspect-square max-h-40 mt-4 overflow-hidden">
            <img src={recipe.image} alt={recipe.title} />
          </div>
        </div>
      )}
    </Draggable>
  );
};
