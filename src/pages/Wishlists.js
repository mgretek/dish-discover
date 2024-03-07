import React, { useEffect, useState } from "react";
import { Wishlist } from "../components/wishlist/Wishlist";
import { AddNewModal } from "../components/wishlist/AddNewModal";
import CallToAction from "../components/wishlist/CallToAction";
import {
  getAllWishlists,
  saveWishlist,
} from "../components/wishlist/wishlists";

// Drag and drop
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// user authentication
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export const Wishlists = () => {
  const [popupOpen, setPopupOpen] = useState(true);
  const [wishlists, setWishlists] = useState([]);
  const [user] = useAuthState(auth);
  const [titleEditActive, setTitleEditActive] = useState(false);

  useEffect(() => {
    setPopupOpen(false);
    async function fetchWishlists() {
      const allWishlists = await getAllWishlists();
      if (allWishlists) {
        setWishlists(allWishlists);
      }
    }
    fetchWishlists();
  }, []);

  function addNewList({ title }) {
    const newArr = [...wishlists, { title: title, recipes: [] }];
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr });
    setPopupOpen(false);
  }

  function handleDelete({ recipeId, listIndex }) {
    const newArr = [...wishlists];
    newArr[listIndex].recipes = newArr[listIndex].recipes.filter(
      (item) => item.id !== recipeId
    );
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr });
  }

  function handleTitleEdit() {
    setTitleEditActive(!titleEditActive);
  }

  function saveTitle({ newTitle, listIndex }) {
    const newArr = [...wishlists];
    newArr[listIndex] = {
      ...newArr[listIndex],
      title: newTitle,
    };
    console.log(newArr);
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr });
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const sourceListIndex = parseInt(source.droppableId.split("-")[1]);
    const destinationListIndex = parseInt(
      destination.droppableId.split("-")[1]
    );

    const newWishlists = [...wishlists];

    const [draggedItem] = newWishlists[sourceListIndex].recipes.splice(
      sourceIndex,
      1
    );

    if (newWishlists[sourceListIndex].recipes.length === 0) {
      // Handle the case when the source list is empty
      newWishlists[sourceListIndex].recipes = []; // Clear the source list
    }

    if (Array.isArray(newWishlists[destinationListIndex].recipes)) {
      newWishlists[destinationListIndex].recipes.splice(
        destinationIndex,
        0,
        draggedItem
      );
    } else {
      // If recipes array doesn't exist, create a new array with the dragged item
      newWishlists[destinationListIndex].recipes = [draggedItem];
    }

    setWishlists(newWishlists);
    saveWishlist({ wishLists: newWishlists });
  }

  return (
    <div className="mx-4 md:px-20 xl:px-60 min-h-full">
      {popupOpen && (
        <AddNewModal
          addNewList={addNewList}
          onCancel={() => setPopupOpen(false)}
        />
      )}
      {user && (
        <div className="py-12">
          <div className="flex mb-6 justify-between items-center">
            <h2
              className="text-5xl text-left font-bold text-gray-800"
              onClick={handleTitleEdit}
            >
              Your wishlists
            </h2>
            <button
              className="flex justify-center w-10 h-10 bg-violet-200 rounded-full font-bold text-gray-700"
              onClick={() => setPopupOpen(true)}
            >
              <div className="self-center">
                <svg
                  className="text-gray-700 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Searchbar */}
          <div className="relative self-center">
            <input
              placeholder="Search..."
              className="h-10 pl-2 bg-gray-50 flex border rounded-sm border-gray-300 text-gray-800 text-md w-full focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
            <button className="absolute right-0 top-0 h-full px-3">
              <div className="w-4 text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
      <div>
        {user ? (
          <DragDropContext onDragEnd={onDragEnd}>
            {wishlists.length > 0 &&
              wishlists.map((list, index) => (
                <Droppable key={index} droppableId={`list-${index}`}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      key={index}
                    >
                      <Wishlist
                        listIndex={index}
                        list={list}
                        handleDelete={handleDelete}
                        saveTitle={saveTitle}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
          </DragDropContext>
        ) : (
          <CallToAction />
        )}
      </div>
    </div>
  );
};
