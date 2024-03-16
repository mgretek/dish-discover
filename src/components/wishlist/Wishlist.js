import React, { useState } from "react";
import { DownArrow } from "../buttons/arrows/DownArrow";
import { Draggable } from "react-beautiful-dnd";
import { ForwardArrow } from "../buttons/arrows/ForwardArrow";
import { PencilIcon } from "../icons/PencilIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { Link } from "react-router-dom";
import { ScoreIcon } from "../icons/ScoreIcon";
import { TimeIcon } from "../icons/TimeIcon";

export const Wishlist = ({
  saveTitle,
  list,
  listIndex,
  handleDelete,
  handleDeleteList,
}) => {
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
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex bg-gradient-to-r from-pink-100 via-pink-200 to-indigo-200 rounded-full justify-between items-center px-4 py-3 mb-3">
        <div className="flex items-center gap-x-1">
          {!titleEditActive ? (
            <div class="flex">
              <h1 className="text-xl flex-2 font-semibold uppercase tracking-wider mr-2 text-gray-700">
                {listTitle}
              </h1>
              <h1 className="text-sm flex-2 uppercase tracking-wider mr-2 text-gray-700">
                {Array.isArray(list.recipes) > 0
                  ? `(${list.recipes.length})`
                  : "(0)"}
              </h1>
            </div>
          ) : (
            <div className="flex">
              <input
                className="border rounded-sm text-gray-800 pl-1"
                value={listTitle}
                onChange={(e) => setListTitle(e.target.value)}></input>
              <button
                className="bg-indigo-400 text-white text-sm px-4 ml-3 rounded-sm"
                onClick={handleTitleEdit}>
                Save title
              </button>
            </div>
          )}
          {isHovered && !titleEditActive && (
            <div class="flex gap-x-2">
              <PencilIcon onClick={handleTitleEdit} />
              <DeleteIcon onClick={() => handleDeleteList(list)} />
            </div>
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
      index={itemIndex}>
      {(provided) => (
        <div
          className="bg-white p-5 m-1 flex flex-col shadow-md  border border-gray-200 rounded-xl hover:border-violet-300"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div className="flex items-center mb-3">
            <Link to={`/recipe/${recipe.id}`}>
              <div className="text-2xl mr-3 font-semibold text-gray-800">
                {recipe.title}
              </div>
            </Link>
            <button
              className="ml-auto text-pink-400 text-sm"
              onClick={() =>
                handleDelete({ recipeId: recipe.id, listIndex: listIndex })
              }>
              <DeleteIcon className="text-pink-400" />
            </button>
          </div>
          <div className="flex mb-1.5">
            <p className="text-gray-800 text-md">
              <div className="flex gap-x-2 items-center">
                <TimeIcon className="w-4 text-violet-400" />
                {recipe.readyInMinutes} min
              </div>
            </p>
            <p className="mx-3 text-gray-800">|</p>
            <div className="flex items-center gap-x-2 text-gray-800">
              <ScoreIcon className="w-4 text-violet-400" />
              {Number(recipe.spoonacularScore.toFixed(2))}
            </div>
          </div>
          <div className="text-gray-700 text-sm italic">
            {recipe.dishTypes.map((type, index) => (
              <React.Fragment key={index}>
                {type}
                {index !== recipe.dishTypes.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>

          <div className="aspect-square max-h-40 mt-4 overflow-hidden">
            <div className="aspect-w-4 aspect-h-3">
              {recipe.image ? (
                <img
                  className="mb-2 rounded-lg"
                  src={recipe.image}
                  alt={recipe.title}
                />
              ) : (
                <div
                  className="flex items-start pt-16 justify-start w-full h-full bg-right bg-cover mb-2 rounded-lg"
                  style={{
                    backgroundImage: "url(/images/placeholder-min.jpg)",
                  }}>
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
