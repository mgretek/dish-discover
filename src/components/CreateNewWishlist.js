import React, { useState } from "react";

export const CreateNewWishlist = () => {
  const [userInput, setUserInput] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  function toggleInput() {
    setInputVisible(!inputVisible);
  }
  function handleSubmit() {
    
  }

  return (
    <div>
      <h2>{userInput}</h2>
      {inputVisible ? (
        <div class="flex">
          <input onChange={(e) => setUserInput(e.target.value)}></input>
          <button>Create</button>
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
