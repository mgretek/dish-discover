import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

import {
  deleteRecipeById,
  getShoppinglist,
} from "../components/shoppinglist/shoppinglist";
import { Toggle } from "../components/toggle/Toggle";

export const Shoppinglist = () => {
  const [shoppinglist, setShoppingList] = useState([]);
  const [user] = useAuthState(auth);
  const [measureType, setMeasureType] = useState("us");

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
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
    <div className="flex justify-center lg:max-w-[1260px] px-6 sm:px-16 mt-8 sm:mt-16 mx-6 sm:mx-auto max-w-[620px] min-h-full border-2 border-violet-200 rounded-md">
      {user ? (
        <div className="flex flex-col">
          <div className="self-end text-gray-500">Metric units</div>
          <button className="self-end" onClick={toggleMeasure}>
            <Toggle />
          </button>
          {shoppinglist.map((item) => (
            <div className="flex flex-row gap-3 m-3 w-max">
              <p className="font-bold">{item.title}</p>
              <p>{item.ingredients[0].name}</p>
              <p>{item.ingredients[0].measures[measureType].amount}</p>
              <p>{item.ingredients[0].measures[measureType].unitLong}</p>
              <button
                className="text-red-600"
                onClick={() => deleteRecipeById(0, item.id)}>
                Delete
              </button>
            </div>
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
            a virtual grocery sidekick – making your shopping experience a
            breeze. Stay organized, never miss an item, and enjoy stress-free
            cooking prep!{" "}
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
