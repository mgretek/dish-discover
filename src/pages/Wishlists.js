import React, { useEffect, useState } from "react";
import { Wishlist } from "../components/wishlist/Wishlist";
import { v4 as uuidv4 } from "uuid";
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
  const [uid, setUid] = useState("");

  const [titleEditActive, setTitleEditActive] = useState(false);

  // get user id when logged in
  useEffect(() => {
    if (user) {
      const userData = JSON.parse(JSON.stringify(user));
      // console.log("user uid is:", userData.uid);
      setUid(userData.uid);
    }
  }, [user]);

  useEffect(() => {
    setPopupOpen(false);

    async function fetchWishlists() {
      try {
        const allWishlists = await getAllWishlists(uid);
        console.log("allwishlists are:", allWishlists);
        if (allWishlists) {
          setWishlists(allWishlists);
        } else {
          console.log("no snapshot");
        }
      } catch (error) {
        console.error("Error fetching wishlists:", error);
      }
    }

    fetchWishlists();
  }, [uid]);

  function addNewList({ title }) {
    const newId = uuidv4();
    const newArr = [...wishlists, { title: title, recipes: [], id: newId }];
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr, uid: uid });
    setPopupOpen(false);
  }
  function handleDeleteList(listObj) {
    const newArr = [...wishlists];
    const filteredArr = newArr.filter((list) => list.id !== listObj.id);
    saveWishlist({ wishLists: filteredArr, uid: uid });
    setWishlists(filteredArr);
  }

  function handleDelete({ recipeId, listIndex }) {
    const newArr = [...wishlists];
    newArr[listIndex].recipes = newArr[listIndex].recipes.filter(
      (item) => item.id !== recipeId
    );
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr, uid: uid });
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
    saveWishlist({ wishLists: newArr, uid: uid });
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
    saveWishlist({ wishLists: newWishlists, uid: uid });
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
        <div className="pt-16 pb-12">
          <div className="flex mb-4 justify-between items-center">
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
          <div class="h-1.5 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-6"></div>

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
                <Droppable key={list.id} droppableId={`list-${index}`}>
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
                        handleDeleteList={handleDeleteList}
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
