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
        <div className="flex items-center gap-2">
          <div
            className="text-sm font-medium text-gray-700"
            onClick={toggleInput}
          >
            Create new
          </div>
          <div className="flex justify-center w-6 h-6 bg-violet-100 rounded-full font-bold text-gray-700">
            <div className="self-center">
              <svg
                className="text-gray-700 w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
