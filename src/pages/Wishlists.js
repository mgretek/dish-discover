import React, { useEffect, useState } from "react";
import { Wishlist } from "../components/wishlist/Wishlist";
import { AddNewModal } from "../components/wishlist/AddNewModal";
import CallToAction from "../components/wishlist/CallToAction";
import {
  getAllWishlists,
  saveWishlist,
} from "../components/wishlist/wishlists";
import { AddButton } from "../components/AddButton";
import { SearchIcon } from "../components/icons/SearchIcon";

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

  const handleButtonClick = () => setPopupOpen(true);

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
            <AddButton
              onClick={handleButtonClick}
              className="flex justify-center w-10 h-10 bg-violet-200 rounded-full font-bold text-gray-700"
            />
          </div>

          {/* Searchbar */}
          <div className="relative self-center">
            <input
              placeholder="Search..."
              className="h-10 pl-2 bg-gray-50 flex border rounded-sm border-gray-300 text-gray-800 text-md w-full focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
            <button className="absolute right-0 top-0 h-full px-3">
              <SearchIcon className="w-4 text-violet-400" />
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
