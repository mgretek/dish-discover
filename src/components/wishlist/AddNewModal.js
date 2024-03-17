import React, { useState } from "react";

export const AddNewModal = ({ addNewList, onCancel }) => {
  const [newTitle, setNewTitle] = useState();

  function handleAdd() {
    addNewList({ title: newTitle });
    setNewTitle("");
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg px-8 pt-8 pb-6 max-w-md">
        <div className="mb-2 justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">New wishlist</h2>
          <div className="font-semibold text-violet-500 text-lg self-end">
            {newTitle}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Title:</label>
          <input
            className="mb-4 border rounded pl-1"
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <button
            className="bg-violet-300 hover:bg-violet-400 text-white px-4 py-1.5 rounded-lg"
            onClick={handleAdd}
          >
            Add
          </button>
          <button
            className="bg-gray-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg ml-3"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
