import React, { useState } from "react";

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
            className="border"
            placeholder="New title..."
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button className="bg-gray-300 px-3 ml-2" onClick={handleSubmit}>
            Create
          </button>
        </div>
      ) : (
        <div
          className="text-sm font-medium text-gray-700"
          onClick={toggleInput}
        >
          Create new
        </div>
      )}
    </div>
  );
};
