import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

import {
  deleteRecipeById,
  getShoppinglist,
} from "../components/shoppinglist/shoppinglist";
import { Toggle } from "../components/toggle/Toggle";
/* import { Loading } from "../components/loading/Loading"; */

export const Shoppinglist = () => {
  const [shoppinglist, setShoppingList] = useState([]);
  const [user] = useAuthState(auth);
  const [measureType, setMeasureType] = useState("us");
  /* const [isLoading, setIsLoading] = useState(false); */

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
  }

  /* function refreshPage() {
    window.location.reload(false);
  } */

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
            <div className="flex flex-row gap-3 m-3">
              <p className="font-bold">{item.title}</p>
              {item.ingredients.map((ingredient) => (
                <div className="border-b-black border-2">
                  <p>{ingredient.name}</p>
                  <p>{ingredient.amount}</p>
                  <p>{ingredient.measures[measureType].unitLong}</p>
                </div>
              ))}
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
