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
    <div className="md:px-20 xl:px-60 min-h-full">
      {popupOpen && (
        <AddNewModal
          addNewList={addNewList}
          onCancel={() => setPopupOpen(false)}
        />
      )}
      {true && (
        <div className="flex py-10 justify-between">
          <h2
            className="text-5xl text-left font-bold"
            onClick={handleTitleEdit}
          >
            Your wishlists
          </h2>
          <button
            className="bg-gray-800 px-5 py-3 rounded-full font-bold text-white ml-auto mr-3"
            onClick={() => setPopupOpen(true)}
          >
            + New
          </button>
          <input
            placeholder="Search recipes..."
            className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm  h-auto"
          ></input>
        </div>
      )}
      <div>
        {true ? (
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
