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
      <div className="flex bg-gradient-to-r from-pink-100 via-pink-200 to-indigo-200 rounded-full justify-between items-center px-4 py-3 mb-3">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!titleEditActive ? (
            <div class="flex">
              <h1 className="text-xl flex-2 font-medium uppercase tracking-wider mr-2 text-gray-800">
                {listTitle}
              </h1>
              <h1 className="text-sm flex-2 uppercase tracking-wider mr-2 text-gray-800">
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
          className="bg-white p-5 m-1 flex flex-col shadow-md  border border-gray-200 rounded-xl hover:border-violet-300"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex items-center">
            <h2 className="text-2xl mr-3">{recipe.title}</h2>
            <button
              className="ml-auto text-gray-500 font-semibold text-sm"
              onClick={() =>
                handleDelete({ recipeId: recipe.id, listIndex: listIndex })
              }
            >
              <div className="w-4">
                <svg
                  className="text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex">
            <p>Time: {recipe.readyInMinutes} min</p>
            <p className="mx-3">|</p>
            <h3>Ingredients: 4</h3>
          </div>

          <div className="aspect-square max-h-40 mt-4 overflow-hidden">
            {/* <img src={recipe.image} alt={recipe.title} /> */}
            <div className="aspect-w-4 aspect-h-3">
              {recipe.image ? (
                <img
                  className="mb-2 rounded-lg "
                  src={recipe.image}
                  alt={recipe.title}
                />
              ) : (
                <div
                  className="flex items-start pt-16 justify-start w-full h-full bg-right bg-cover mb-2 rounded-lg"
                  style={{
                    backgroundImage: "url(/images/placeholder-min.jpg)",
                  }}
                >
                  <span className="text-xl font-semibold text-gray-500 w-2/3 pl-3 text-center">
                    Sorry, no image available
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
