import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

import {
  deleteRecipeById,
  getShoppinglist,
  saveShoppinglist,
} from "../components/shoppinglist/shoppinglist";
import { Toggle } from "../components/buttons/toggle/Toggle";

export const Shoppinglist = () => {
  const [shoppinglist, setShoppingList] = useState([]);
  const [user] = useAuthState(auth);
  const [measureType, setMeasureType] = useState("us");
  const [isChecked, setIsChecked] = useState("false");

  function handleDeleteRecipe(id) {
    // copy shoppinglist and filter deleted item out
    const newShoppingList = shoppinglist.filter((recipe) => recipe.id !== id);
    // update local state
    setShoppingList(newShoppingList);
    // update firebase database
    deleteRecipeById(0, id);
  }

  function handleIncrement(index, listIndex) {
    // Copy shoppinglist object
    const newShoppingList = JSON.parse(JSON.stringify(shoppinglist));
    // Increment metric amount
    newShoppingList[listIndex].ingredients[index].measures.metric.amount += 1;
    // Increment US amount
    newShoppingList[listIndex].ingredients[index].measures.us.amount += 1;
    // Increment general amount
    newShoppingList[listIndex].ingredients[index].amount += 1;
    // update local state
    setShoppingList(newShoppingList);
    // update firebase database
    saveShoppinglist(newShoppingList);
  }
  function handleDecrement(index, listIndex) {
    const newShoppingList = JSON.parse(JSON.stringify(shoppinglist));
    // Decrement metric amount
    newShoppingList[listIndex].ingredients[index].measures.metric.amount -= 1;
    // Decrement US amount
    newShoppingList[listIndex].ingredients[index].measures.us.amount -= 1;
    // Decrement general amount
    newShoppingList[listIndex].ingredients[index].amount -= 1;
    console.log("decremented some");
    // update local state
    setShoppingList(newShoppingList);
    // update firebase database
    saveShoppinglist(newShoppingList);
  }

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
  }

  function toggleChecked() {
    setIsChecked(!setIsChecked);
  }

  useEffect(() => {
    async function fetchShoppingList() {
      const shoppinglistObj = await getShoppinglist();
      if (shoppinglistObj) {
        setShoppingList(shoppinglistObj);
        console.log("shoppinglist import done:");
        console.log(shoppinglistObj);
      }
    }
    fetchShoppingList();
  }, []);

  return (
    <div className="mx-4 md:px-20 xl:px-60 min-h-full">
      {user ? (
        <div className="">
          <div className="flex">
            <h1 className="text-5xl text-left font-bold text-gray-800 py-10">
              Your Shopping List
            </h1>
            <button className="px-3" onClick={toggleMeasure}>
              Unit<Toggle></Toggle>
            </button>
          </div>
          {shoppinglist.map((item, listIndex) => (
            <>
              <div
                className="border border-pink-200 content-center p-3 m-3"
                key={shoppinglist.id}>
                <div className="flex ">
                  <p className="flex-grow font-bold items-baseline">
                    {item.title}
                  </p>
                  <button
                    className="text-red-600"
                    onClick={() => handleDeleteRecipe(item.id)}>
                    Delete
                  </button>
                </div>

                {item.ingredients.map((ingredient, index, id) => (
                  <div
                    style={{
                      textDecoration: isChecked ? "line-through" : "none",
                      textDecorationColor: "red",
                    }}
                    className="flex items-baseline justify-around border border-b-2 p-2 m-2 "
                    key={ingredient.name}>
                    <p className="">{ingredient.name}</p>
                    <p className="flex justify-center items-baseline">
                      {ingredient.measures[measureType].amount}
                      <button
                        className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 ml-3 rounded"
                        onClick={() => handleIncrement(index, listIndex)}>
                        +
                      </button>
                      <button
                        className="bg-red-300 hover:bg-red-100 text-red-800 font-bold py-2 px-4 mx-1 rounded"
                        onClick={() => handleDecrement(index, listIndex)}>
                        -
                      </button>
                    </p>
                    <p>{ingredient.measures[measureType].unitLong}</p>
                    <button
                      className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 ml-3 rounded"
                      onClick={() => toggleChecked()}>
                      Checked!
                    </button>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          <h1 className="mt-14 text-center text-3xl sm:text-5xl font-semibold text-gray-800 mb-10">
            Please log in to use the shopping list
          </h1>
          <p className="text-md sm:text-lg text-center mb-5 text-gray-700">
            Say hello to your personal shopping assistant, exclusive to our
            logged-in users! Discover recipes, pick your favorites, and
            effortlessly add ingredients to your shopping list. It's like having
            a virtual grocery sidekick - making your shopping experience a
            breeze. Stay organized, never miss an item, and enjoy stress-free
            cooking prep!
          </p>
          <Link
            to={"/login"}
            className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-2 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600 ">
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};
