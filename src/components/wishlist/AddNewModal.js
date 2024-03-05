import React, { useState } from "react";

export const AddNewModal = ({ addNewList, onCancel }) => {
  const [newTitle, setNewTitle] = useState();

  function handleAdd() {
    addNewList({ title: newTitle });
    setNewTitle("");
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <div class="flex items-start">
          <h2 className="text-2xl font-semibold mb-4">New wishlist</h2>
          <p>{newTitle}</p>
          <button className="ml-auto text-xl" onClick={onCancel}>
            x
          </button>
        </div>
        <div className="flex flex-col">
          <label className="">Title:</label>
          <input
            className="mb-4 border"
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <button
            className="bg-indigo-400 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-gray-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-3"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
