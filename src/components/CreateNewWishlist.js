import React, { useState } from "react";
import { AddButton } from "./AddButton";
import { AddIcon } from "./icons/AddIcon";

export const CreateNewWishlist = ({ addNewList }) => {
  const [userInput, setUserInput] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  function toggleInput() {
    setInputVisible(!inputVisible);
  }
  function handleSubmit() {
    addNewList({ title: userInput });
    toggleInput();
    setUserInput("");
  }

  return (
    <div>
      {inputVisible ? (
        <div className="flex gap-x-2 p-2">
          <input
            className="border border-lg pl-1 text-sm rounded-md"
            placeholder="New title..."
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button
            className="flex self-center p-1.5 bg-violet-200 rounded-md text-gray-700 font-semibold"
            onClick={handleSubmit}
          >
            <AddIcon className="w-3" />
          </button>
        </div>
      ) : (
        <div
          className="flex gap-x-2 p-2.5 cursor-pointer"
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
