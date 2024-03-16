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
import { DeleteIcon } from "../components/icons/DeleteIcon";
import { Increase } from "../components/icons/Increase";
import { Decrease } from "../components/icons/Decrease";
import { AddedToCartIcon } from "../components/icons/AddedToCartIcon";

export const Shoppinglist = () => {
  const [shoppinglist, setShoppingList] = useState([]);
  const [user] = useAuthState(auth);
  const [measureType, setMeasureType] = useState("us");
  const [uid, setUid] = useState("");

  function handleDeleteRecipe(id) {
    // copy shoppinglist and filter deleted item out
    const newShoppingList = shoppinglist.filter((recipe) => recipe.id !== id);
    // update local state
    setShoppingList(newShoppingList, uid);
    // update firebase database
    deleteRecipeById(0, id, uid);
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
    saveShoppinglist({ shoppinglist: newShoppingList, uid: uid });
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
    saveShoppinglist({ shoppinglist: newShoppingList, uid: uid });
  }

  function incrementQuantity(listIndex) {
    // copy shoppinglist array and modify it
    const newShoppingList = JSON.parse(JSON.stringify(shoppinglist));
    newShoppingList[listIndex].quantity += 1;
    // save to local state and database
    setShoppingList(newShoppingList);
    saveShoppinglist({ shoppinglist: newShoppingList, uid: uid });
  }
  function decrementQuantity(listIndex) {
    const newShoppingList = JSON.parse(JSON.stringify(shoppinglist));
    if (newShoppingList[listIndex].quantity > 1) {
      newShoppingList[listIndex].quantity -= 1;
    }
    setShoppingList(newShoppingList);
    saveShoppinglist({ shoppinglist: newShoppingList, uid: uid });
  }

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
  }

  function toggleChecked(index, listIndex) {
    const newShoppingList = JSON.parse(JSON.stringify(shoppinglist));
    if (newShoppingList[listIndex].ingredients[index].isChecked) {
      newShoppingList[listIndex].ingredients[index].isChecked = false;
    } else {
      newShoppingList[listIndex].ingredients[index].isChecked = true;
    }
    setShoppingList(newShoppingList);
    saveShoppinglist({ shoppinglist: newShoppingList, uid: uid });
  }
  // get user id when logged in
  useEffect(() => {
    if (user) {
      const userData = JSON.parse(JSON.stringify(user));
      // console.log("user uid is:", userData.uid);
      setUid(userData.uid);
    }
  }, [user]);

  useEffect(() => {
    async function fetchShoppingList() {
      const shoppinglistObj = await getShoppinglist(uid);
      if (shoppinglistObj) {
        setShoppingList(shoppinglistObj);
        console.log("shoppinglist import done:");
        console.log(shoppinglistObj);
      }
    }
    fetchShoppingList();
  }, [uid]);

  return (
    <div className="mx-4 md:px-20 xl:px-60 min-h-full">
      {user ? (
        <div>
          <h1 className="text-5xl text-left font-bold text-gray-800 pt-16 mb-4">
            Your Shopping List
          </h1>
          <div class="h-1.5 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-6"></div>

          <div className="flex self-center justify-end mb-1.5 md:mb-3 items-center">
            <span className="text-gray-600 text-sm font-semibold">
              Metric units
            </span>
            <span>
              <button className="px-3" onClick={toggleMeasure}>
                <Toggle />
              </button>
            </span>
          </div>

          {shoppinglist.map((item, listIndex) => (
            <>
              <div
                className="content-center px-3 pt-4 md:pt-8 pb-12"
                key={shoppinglist.id}
              >
                <div className="flex mb-3 gap-x-2 justify-between">
                  <Link
                    to={`/recipe/${item.id}`}
                    className="font-bold items-baseline self-center text-gray-800 text-lg"
                  >
                    {item.title}
                  </Link>

                  <div class="flex gap-x-4 items-center">
                    <div className="">
                      <div className="flex gap-x-3">
                        <button onClick={() => decrementQuantity(listIndex)}>
                          <Decrease className="w-5 text-violet-300" />
                        </button>
                        <div className="text-gray-600 font-semibold text-lg">
                          {item.quantity}
                        </div>
                        <button onClick={() => incrementQuantity(listIndex)}>
                          <Increase className="w-5 text-violet-300" />
                        </button>
                      </div>
                    </div>
                    <div className="border-l-2 border-gray-300 w-1 h-[75%]"></div>
                    <button
                      className="w-6 text-pink-600"
                      onClick={() => handleDeleteRecipe(item.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-2"></div>

                {item.ingredients.map((ingredient, index, id) => (
                  <div
                    style={{
                      textDecoration: ingredient.isChecked
                        ? "line-through 1px gray"
                        : "none",
                      textDecorationColor: "gray",
                      fontStyle: ingredient.isChecked ? "italic" : "normal",
                      color: ingredient.isChecked ? "gray" : "",
                    }}
                    className="flex justify-between gap-x-6 items-center border-bottom border-b-2 border-violet-100 py-3"
                    key={ingredient.name}
                  >
                    <div className="flex gap-x-2">
                      <div>
                        <span className="font-semibold">
                          {Number(
                            (
                              ingredient.measures[measureType].amount *
                              item.quantity
                            ).toFixed(1)
                          )}{" "}
                        </span>
                        <span className="font-semibold">
                          {ingredient.measures[measureType].unitLong}{" "}
                        </span>
                        {ingredient.name}
                      </div>
                    </div>

                    <div className="flex justify-end gap-x-4 pr-1">
                      <div className="flex items-center gap-x-4">
                        <button
                          onClick={() => handleIncrement(index, listIndex)}
                        >
                          <Increase className="w-5 text-violet-300" />
                        </button>
                        <button
                          onClick={() => handleDecrement(index, listIndex)}
                        >
                          <Decrease className="w-5 text-violet-300" />
                        </button>
                      </div>

                      <div className="border-l-2 border-gray-300 bg-gray-300 w-1 h-[75%]"></div>

                      <button onClick={() => toggleChecked(index, listIndex)}>
                        <AddedToCartIcon className="w-5 text-violet-400" />
                      </button>
                    </div>
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
            className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-2 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600 "
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};
