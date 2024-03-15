import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

import { useParams } from "react-router-dom";
import {
  addToWishlist,
  getAllWishlists,
  removeFromWishlist,
  saveWishlist,
} from "../components/wishlist/wishlists";
import { HeartIcon } from "../components/icons/HeartIcon";
import { RecipeSteps } from "../components/RecipeSteps";
import { Toggle } from "../components/buttons/toggle/Toggle";
import { addToShoppinglist } from "../components/shoppinglist/shoppinglist";
import { CartIcon } from "../components/icons/CartIcon";

// For WishListPopover
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CreateNewWishlist } from "../components/CreateNewWishlist";
// import { HeartIcon } from "./icons/HeartIcon";
// import { addToWishlist } from "../components/wishlist/wishlists";

// For WishListPopover
const Wishlists = [
  {
    title: "List 1",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    title: "List 2",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    title: "List 3",
    description: "Keep track of your growth",
    href: "##",
  },
];

const recipeTemplate = {
  vegetarian: true,
  vegan: false,
  glutenFree: true,
  dairyFree: false,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 15,
  gaps: "no",
  preparationMinutes: -1,
  cookingMinutes: -1,
  aggregateLikes: 249,
  healthScore: 4,
  creditsText: "Full Belly Sisters",
  license: "CC BY-SA 3.0",
  sourceName: "Full Belly Sisters",
  pricePerServing: 405.52,
  extendedIngredients: [
    {
      id: 4047,
      aisle: "Health Foods",
      image: "oil-coconut.jpg",
      consistency: "SOLID",
      name: "coconut oil",
      nameClean: "coconut oil",
      original: "coconut oil for grilling",
      originalName: "coconut oil for grilling",
      amount: 4.0,
      unit: "servings",
      meta: ["for grilling"],
      measures: {
        us: { amount: 4.0, unitShort: "servings", unitLong: "servings" },
        metric: { amount: 4.0, unitShort: "servings", unitLong: "servings" },
      },
    },
    {
      id: 19296,
      aisle: "Nut butters, Jams, and Honey",
      image: "honey.png",
      consistency: "LIQUID",
      name: "honey",
      nameClean: "honey",
      original: "1/4 cup honey",
      originalName: "honey",
      amount: 0.25,
      unit: "cup",
      meta: [],
      measures: {
        us: { amount: 0.25, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 84.75, unitShort: "ml", unitLong: "milliliters" },
      },
    },
    {
      id: 19296,
      aisle: "Nut butters, Jams, and Honey",
      image: "honey.png",
      consistency: "LIQUID",
      name: "honey",
      nameClean: "honey",
      original: "2 T honey",
      originalName: "honey",
      amount: 2.0,
      unit: "T",
      meta: [],
      measures: {
        us: { amount: 2.0, unitShort: "Tbsps", unitLong: "Tbsps" },
        metric: { amount: 2.0, unitShort: "Tbsps", unitLong: "Tbsps" },
      },
    },
    {
      id: 9236,
      aisle: "Produce",
      image: "peach.png",
      consistency: "SOLID",
      name: "peaches",
      nameClean: "peach",
      original: "2 large peaches, quartered",
      originalName: "peaches, quartered",
      amount: 2.0,
      unit: "large",
      meta: ["quartered"],
      measures: {
        us: { amount: 2.0, unitShort: "large", unitLong: "larges" },
        metric: { amount: 2.0, unitShort: "large", unitLong: "larges" },
      },
    },
    {
      id: 1001256,
      aisle: "Milk, Eggs, Other Dairy",
      image: "white-cream.png",
      consistency: "LIQUID",
      name: "greek yogurt",
      nameClean: "plain greek yogurt",
      original: "3 cups plain Greek yogurt",
      originalName: "plain Greek yogurt",
      amount: 3.0,
      unit: "cups",
      meta: ["plain"],
      measures: {
        us: { amount: 3.0, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 600.0, unitShort: "ml", unitLong: "milliliters" },
      },
    },
    {
      id: 9302,
      aisle: "Produce",
      image: "raspberries.jpg",
      consistency: "SOLID",
      name: "raspberries",
      nameClean: "raspberries",
      original: "1 1/2 cups raspberries (fresh or frozen)",
      originalName: "raspberries (fresh or frozen)",
      amount: 1.5,
      unit: "cups",
      meta: ["fresh", "()"],
      measures: {
        us: { amount: 1.5, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 180.0, unitShort: "g", unitLong: "grams" },
      },
    },
    {
      id: 10819297,
      aisle: "Nut butters, Jams, and Honey",
      image: "strawberry-jam.png",
      consistency: "SOLID",
      name: "raspberry fruit spread",
      nameClean: "strawberry jam",
      original: "2 tsp 100% raspberry fruit spread",
      originalName: "100% raspberry fruit spread",
      amount: 2.0,
      unit: "tsp",
      meta: ["100%"],
      measures: {
        us: { amount: 2.0, unitShort: "tsps", unitLong: "teaspoons" },
        metric: { amount: 2.0, unitShort: "tsps", unitLong: "teaspoons" },
      },
    },
    {
      id: 93622,
      aisle: "Baking",
      image: "vanilla.jpg",
      consistency: "SOLID",
      name: "vanilla bean",
      nameClean: "vanilla bean",
      original: "1 vanilla bean",
      originalName: "vanilla bean",
      amount: 1.0,
      unit: "",
      meta: [],
      measures: {
        us: { amount: 1.0, unitShort: "", unitLong: "" },
        metric: { amount: 1.0, unitShort: "", unitLong: "" },
      },
    },
  ],
  id: 716421,
  title: "Grilled Peach Melba with Vanilla Bean Frozen Yogurt",
  readyInMinutes: 45,
  servings: 4,
  sourceUrl:
    "http://fullbellysisters.blogspot.com/2012/06/grilled-peach-melba-with-vanilla-bean.html",
  image: "https://spoonacular.com/recipeImages/716421-556x370.jpg",
  imageType: "jpg",
  summary:
    'If you have approximately <b>45 minutes</b> to spend in the kitchen, Grilled Peach Melba with Vanilla Bean Frozen Yogurt might be a great <b>gluten free and lacto ovo vegetarian</b> recipe to try. This recipe serves 4. One portion of this dish contains approximately <b>17g of protein</b>, <b>15g of fat</b>, and a total of <b>377 calories</b>. For <b>$4.06 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. It is brought to you by fullbellysisters.blogspot.com. 249 people have tried and liked this recipe. It is perfect for <b>The Fourth Of July</b>. It works well as a main course. A mixture of coconut oil, peaches, raspberry fruit spread, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Taking all factors into account, this recipe <b>earns a spoonacular score of 48%</b>, which is solid. <a href="https://spoonacular.com/recipes/vanilla-peach-swirl-frozen-yogurt-489719">Vanilla Peach Swirl Frozen Yogurt</a>, <a href="https://spoonacular.com/recipes/blueberry-vanilla-bean-frozen-yogurt-200206">Blueberry Vanilla Bean Frozen Yogurt</a>, and <a href="https://spoonacular.com/recipes/ginger-vanilla-bean-frozen-yogurt-605876">Ginger Vanilla Bean Frozen Yogurt</a> are very similar to this recipe.',
  cuisines: [],
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  diets: ["gluten free", "lacto ovo vegetarian"],
  occasions: ["father's day", "4th of july", "summer"],
  winePairing: { pairedWines: [], pairingText: "", productMatches: [] },
  instructions: "",
  analyzedInstructions: [],
  originalId: null,
  spoonacularScore: 49.8200569152832,
  spoonacularSourceUrl:
    "https://spoonacular.com/grilled-peach-melba-with-vanilla-bean-frozen-yogurt-716421",
};

// const apiKey = "da2c9951c50f4074ad413ff879110743";
// const apiKey = "33850490cff6451f9704d9b995785d53";
const apiKey = "3b6f5c130d8144cdbf343ff51431d254";
// const apiKey = "8c7408891f0843b7a5b62b8bd041580d";
// const apiKey = "ce8f62b9c28943eeb68a1f734847059a";

export const Recipe = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState(recipeTemplate);
  const [measureType, setMeasureType] = useState("us");
  const [isFetched, setIsFetched] = useState(false);
  const [wishlists, setWishlists] = useState([]);
  const [user] = useAuthState(auth);
  const [uid, setUid] = useState("");

  const [newTitle, setNewTitle] = useState("");

  function addNewList({ title }) {
    const newId = uuidv4();
    const newArr = [...wishlists, { title: title, recipes: [], id: newId }];
    setWishlists(newArr);
    saveWishlist({ wishLists: newArr, uid: uid });
  }
  function handleRemoveRecipe(listIndex, recipe) {
    const filteredRecipes = wishlists[listIndex].recipes.filter(
      (item) => item.id !== recipe.id
    );
    const updatedWishlists = [...wishlists];
    updatedWishlists[listIndex] = {
      ...wishlists[listIndex],
      recipes: filteredRecipes,
    };
    setWishlists(updatedWishlists);
    removeFromWishlist(listIndex, recipe, uid);
  }
  function handleAddRecipe(listIndex, recipe) {
    const updatedWishlists = [...wishlists];
    if (wishlists[listIndex].recipes) {
      updatedWishlists[listIndex] = {
        ...wishlists[listIndex],
        recipes: [...wishlists[listIndex].recipes, recipe],
      };
    } else {
      updatedWishlists[listIndex] = {
        ...wishlists[listIndex],
        recipes: [recipe],
      };
    }
    setWishlists(updatedWishlists);
    addToWishlist(listIndex, recipe, uid);
  }

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
  }

  // get user id when logged in
  useEffect(() => {
    if (user) {
      const userData = JSON.parse(JSON.stringify(user));
      // console.log("user uid is:", userData.uid);
      setUid(userData.uid);
    }
  }, [user]);

  // import wishlists from firebase for dropdown list display
  useEffect(() => {
    async function fetchWishlists() {
      const allWishlists = await getAllWishlists(uid);
      setWishlists(allWishlists);
      // console.log(allWishlists);
    }
    fetchWishlists();
  }, [uid]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`
        );
        const json = await response.json();
        setRecipe(json);
        setIsFetched(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <div className="min-h-screen max-w-[576px] md:max-w-7xl mx-auto">
      {isFetched && (
        <div className="flex flex-wrap mx-2 md:mx-auto mt-10 md:px-20">
          <div className="md:flex md:gap-x-3 md:pb-14">
            {/* IMG */}
            <div className="w-full md:w-2/6">
              <div className="aspect-w-4 aspect-h-3">
                {recipe.image ? (
                  <img
                    className="mb-2 rounded-lg "
                    src={recipe.image}
                    alt={recipe.title}
                  />
                ) : (
                  <div
                    className="flex items-center justify-start w-full h-full bg-right bg-cover mb-2 rounded-lg"
                    style={{
                      backgroundImage: "url(/images/placeholder-min.jpg)",
                    }}
                  >
                    <span className="text-xl md:text-xs font-semibold text-gray-500 w-2/3 pl-3 text-center">
                      Sorry, no image available
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* TITLE & DESCRIPTION */}
            <div className="mb-6 w-full md:mb-0">
              {/* Title + "Add to wishlist" button */}
              <div className="flex flex-wrap xl:flex-nowrap my-4 items-center justify-between gap-x-4 gap-y-3 xl:gap-y-0 md:mt-2 md:mb-4">
                <div>
                  <h1 className="text-3xl font-bold md:text-5xl text-gray-800">
                    {recipe.title}
                  </h1>
                </div>
                <div className="flex gap-1.5 items-center pr-2 flex-row-reverse">
                  <div className="text-right text-xs md:text-md text-gray-500 italic">
                    Add to wishlist
                  </div>
                  <div className="">
                    <Popover className="">
                      {({ open }) => (
                        <>
                          <Popover.Button className="btn text-gray-600 rounded-md">
                            {" "}
                            {user &&
                            wishlists &&
                            wishlists.some(
                              (wishlist) =>
                                wishlist.recipes &&
                                wishlist.recipes.some(
                                  (item) => item.id === recipe.id
                                )
                            ) ? (
                              <HeartIcon fill="currentColor" />
                            ) : (
                              <HeartIcon />
                            )}
                          </Popover.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[50%] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                <div className="relative grid bg-white px-2 pt-2">
                                  {user ? (
                                    <div className="cursor-pointer p-1.5 mx-1.5 flow-root rounded-md transition duration-150 ease-in-out hover:bg-gray-100">
                                      <div className="flex justify-end gap-x-2">
                                        <div>
                                          <CreateNewWishlist
                                            addNewList={addNewList}
                                          />
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
                                      </div>
                                    </div>
                                  ) : (
                                    <p>
                                      Please log in to use wishlist features
                                    </p>
                                  )}
                                  <div className="h-1 ml-1.5 mb-1.5 bg-gradient-to-r from-violet-300 via-pink-200 to-white"></div>

                                  {uid &&
                                    wishlists &&
                                    wishlists.map((item, index) => (
                                      <div className="mb-1.5 mt-1.5 flex items-center rounded-lg px-1.5 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                        <div className="text-sm font-medium text-gray-900 flex">
                                          {item.recipes &&
                                          item.recipes.some(
                                            (recipe) => recipe.id == id
                                          ) ? (
                                            <div
                                              className="flex"
                                              onClick={() =>
                                                handleRemoveRecipe(
                                                  index,
                                                  recipe
                                                )
                                              }
                                            >
                                              <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={true}
                                              ></input>
                                              <button className="flex items-center justify-between">
                                                {item.title}
                                              </button>
                                            </div>
                                          ) : (
                                            <div
                                              className="flex"
                                              onClick={() =>
                                                handleAddRecipe(index, recipe)
                                              }
                                            >
                                              <input
                                                type="checkbox"
                                                className="mr-2"
                                              ></input>
                                              <button className="flex items-center justify-between">
                                                {item.title}
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </div>
                </div>
                <div className="flex gap-1.5 items-center pr-2 flex-row-reverse">
                  <div className="text-right text-xs md:text-md text-gray-500 italic">
                    Add to shoppinglist
                  </div>
                  <button
                    className="btn text-gray-600 rounded-md"
                    onClick={() => addToShoppinglist(0, recipe, 1)}
                  >
                    <CartIcon />
                  </button>
                </div>
              </div>

              {/* Preptime, tags */}
              <div>
                <h2 className="mb-1.5 text-gray-800">
                  Time: {recipe.readyInMinutes} minutes
                </h2>
                <div className="flex flex-wrap">
                  <p className="pr-2 text-gray-800">Tags:</p>
                  {Array.isArray(recipe.dishTypes) &&
                    recipe.dishTypes.map((type) => (
                      <button
                        key={type}
                        className="mr-2 mb-2   text-gray-400 rounded"
                      >
                        #{type}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex md:gap-x-12">
            {/* INGREDIENTS & CONVERSION TOGGLE */}
            <div className="mb-14 min-w-[35%]">
              <div className="flex justify-between gap-x-2">
                <div className="font-bold text-gray-800 text-lg md:text-xl">
                  Ingredients
                </div>
                <div className="flex gap-x-2 mb-0.5 text-xs pr-2 md:pr-0 items-center">
                  <div className="text-gray-500">Metric units</div>
                  <button onClick={toggleMeasure}>
                    <Toggle />
                  </button>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-4"></div>

              <ul>
                {recipe.extendedIngredients.map((item) => (
                  <li key={item.id} className="mb-1.5 text-left">
                    <span className="text-gray-800 font-semibold">
                      {item.measures[measureType].amount}{" "}
                      {item.measures[measureType].unitShort}
                    </span>
                    <span className="text-gray-800"> {item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* INSTRUCTIONS */}
            <div>
              <h1 className="font-bold text-gray-800 text-lg md:text-xl">
                Instructions
              </h1>
              <div className="h-1 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-4"></div>
              <RecipeSteps recipe={recipe} className="truncate" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
