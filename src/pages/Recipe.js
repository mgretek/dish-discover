import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToWishlist } from "../wishlists";
import { HeartIcon } from "../components/HeartIcon";

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

export const Recipe = () => {
  let { id } = useParams();
  const [recipe, setRecipe] = useState(recipeTemplate);
  const [measureType, setMeasureType] = useState("us");
  const [isFetched, setIsFetched] = useState(false);

  function toggleMeasure() {
    const newMeasure = measureType === "us" ? "metric" : "us";
    setMeasureType(newMeasure);
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=71bc3e4381ff4c3db012ffaf603dc32a`
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
    <div className="min-h-screen">
      {isFetched && (
        <div class="flex px-40 pt-10 ">
          <div>
            <img className="mt-4" src={recipe.image} alt={recipe.title} />
            <button
              className=" text-gray py-2 px-4 rounded mr-2"
              onClick={toggleMeasure}
            >
              Toggle units
            </button>
            <ul>
              {recipe.extendedIngredients.map((item) => (
                <li key={item.id} className="mb-2 text-left">
                  {item.name} ({item.measures[measureType].amount}{" "}
                  {item.measures[measureType].unitShort})
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 text-left ">
            <div class="flex">
              <h1 className="text-5xl mb-2">{recipe.title}</h1>
              <button
                className="btn text-gray-600 rounded-md py-3 px-5"
                onClick={() => addToWishlist(1, recipe)}
              >
                <HeartIcon />
              </button>
            </div>
            <h2 className="mb-2">Time: {recipe.readyInMinutes} minutes</h2>
            <div className="flex flex-wrap mb-2">
              <p className="pr-3">Tags:</p>
              {recipe.dishTypes.map((type) => (
                <button
                  key={type}
                  className="mr-2 mb-2   text-gray-400 rounded"
                >
                  #{type}
                </button>
              ))}
            </div>
            <h1 className="text-2xl">Instructions:</h1>
            <h2 className="text-red">
              Ei leidnud veel kuidas API annaks kogu retseptiga juhendeid,
              tundus et on vaja uus api call teha
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
