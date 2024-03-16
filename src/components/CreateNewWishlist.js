import React, { useState } from "react";
import { AddButton } from "./AddButton";

export const CreateNewWishlist = ({ addNewList }) => {
  const [userInput, setUserInput] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  function toggleInput() {
    setInputVisible(!inputVisible);
  }
  function handleSubmit() {
    addNewList({ title: userInput });
    setUserInput("");
  }

  return (
    <div>
      {inputVisible ? (
        <div class="flex">
          <input
            className="border border-lg pl-1 text-md rounded-md"
            placeholder="New title..."
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button
            className="bg-violet-200 rounded-md text-gray-700 font-semibold px-3 ml-1.5"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      ) : (
        <div
          className="flex gap-x-2 px-2 py-1 cursor-pointer"
          onClick={toggleInput}
        >
          <div className="text-sm font-medium self-center text-gray-700">
            Create new wishlist
          </div>
          <AddButton className="flex justify-center rounded-full font-bold text-gray-300" />
        </div>
      )}
    </div>
  );
};
