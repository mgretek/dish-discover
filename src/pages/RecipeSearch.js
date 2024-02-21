import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadWishlists } from "../wishlists";

const data = {
  results: [
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 6,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 139,
      healthScore: 12,
      creditsText: "Afrolems",
      license: "CC BY 4.0",
      sourceName: "Afrolems",
      pricePerServing: 143.79,
      id: 716351,
      title: "Banana Milo Milkshake",
      readyInMinutes: 45,
      servings: 1,
      sourceUrl: "http://www.afrolems.com/2015/02/10/banana-milo-milkshake/",
      image: "https://spoonacular.com/recipeImages/716351-312x231.jpg",
      imageType: "jpg",
      summary:
        'Banana Milo Milkshake requires roughly <b>45 minutes</b> from start to finish. One serving contains <b>284 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b>. This recipe serves 1 and costs $1.44 per serving. It is brought to you by Afrolems. Head to the store and pick up vanillan ice-cream, banana, milo chocolate malt powder, and a few other things to make it today. It works well as a beverage. This recipe is liked by 139 foodies and cooks. Taking all factors into account, this recipe <b>earns a spoonacular score of 71%</b>, which is pretty good. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/galletas-de-milo-milo-cookies-226942">Galletas de Milo (Milo Cookies)</a>, <a href="https://spoonacular.com/recipes/strawberry-banana-milkshake-milkshake-without-ice-cream-600499">Strawberry Banana Milkshake | Milkshake without ice cream</a>, and <a href="https://spoonacular.com/recipes/banana-milkshake-how-to-make-banana-milkshake-486735">banana milkshake , how to make banana milkshake</a>.',
      cuisines: [],
      dishTypes: ["beverage", "drink"],
      diets: [],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "In a blender, pour in your milk, milo, banana and ice-cream and blend till smooth.",
              ingredients: [
                {
                  id: 9040,
                  name: "banana",
                  localizedName: "banana",
                  image: "bananas.jpg",
                },
                {
                  id: 1053,
                  name: "cream",
                  localizedName: "cream",
                  image: "fluid-cream.jpg",
                },
                {
                  id: 1077,
                  name: "milk",
                  localizedName: "milk",
                  image: "milk.png",
                },
                {
                  id: 10014412,
                  name: "ice",
                  localizedName: "ice",
                  image: "ice-cubes.png",
                },
              ],
              equipment: [
                {
                  id: 404726,
                  name: "blender",
                  localizedName: "blender",
                  image: "blender.png",
                },
              ],
            },
            {
              number: 2,
              step: "Pour into a glass, spray the whipped cream on top and sprinkle the chopped strawberries on top.",
              ingredients: [
                {
                  id: 1054,
                  name: "whipped cream",
                  localizedName: "whipped cream",
                  image: "whipped-cream.jpg",
                },
                {
                  id: 9316,
                  name: "strawberries",
                  localizedName: "strawberries",
                  image: "strawberries.png",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Serve cool.    For those that asked, here is a link on how to make whipped cream.",
              ingredients: [
                {
                  id: 1054,
                  name: "whipped cream",
                  localizedName: "whipped cream",
                  image: "whipped-cream.jpg",
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularScore: 72.63641357421875,
      spoonacularSourceUrl:
        "https://spoonacular.com/banana-milo-milkshake-716351",
    },
    {
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 8,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 130,
      healthScore: 11,
      creditsText: "Lisa's Vegetarian Kitchen",
      license: "CC BY 2.5 CA",
      sourceName: "Food and Spice",
      pricePerServing: 203.8,
      id: 794350,
      title: "Cherry Coconut Milk Smoothie",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl:
        "http://foodandspice.blogspot.com/2016/07/cherry-coconut-milk-smoothie.html",
      image: "https://spoonacular.com/recipeImages/794350-312x231.jpg",
      imageType: "jpg",
      summary:
        'Cherry Coconut Milk Smoothie is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 2 servings. One portion of this dish contains approximately <b>4g of protein</b>, <b>17g of fat</b>, and a total of <b>305 calories</b>. For <b>$2.04 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up hemp milk, vanilla, coconut milk, and a few other things to make it today. Several people really liked this breakfast. This recipe is liked by 130 foodies and cooks. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by foodandspice.blogspot.com. All things considered, we decided this recipe <b>deserves a spoonacular score of 68%</b>. This score is solid. <a href="https://spoonacular.com/recipes/cherry-coconut-milk-smoothie-1329549">Cherry Coconut Milk Smoothie</a>, <a href="https://spoonacular.com/recipes/cherry-coconut-milk-smoothie-1593441">Cherry Coconut Milk Smoothie</a>, and <a href="https://spoonacular.com/recipes/coconut-milk-smoothie-125557">Coconut Milk Smoothie</a> are very similar to this recipe.',
      cuisines: [],
      dishTypes: ["morning meal", "brunch", "beverage", "breakfast", "drink"],
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "lacto ovo vegetarian",
        "primal",
        "vegan",
      ],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Combine all of the ingredients in a blender and process until smooth.",
              ingredients: [],
              equipment: [
                {
                  id: 404726,
                  name: "blender",
                  localizedName: "blender",
                  image: "blender.png",
                },
              ],
            },
            {
              number: 2,
              step: "Add a bit more almond or hemp milk if the mixture is too thick.Tip: To freeze bananas for smoothies, peel the banana and cut into slices.",
              ingredients: [
                {
                  id: 98874,
                  name: "hemp milk",
                  localizedName: "hemp milk",
                  image: "hemp-milk.png",
                },
                {
                  id: 0,
                  name: "smoothie",
                  localizedName: "smoothie",
                  image: "",
                },
                {
                  id: 9040,
                  name: "banana",
                  localizedName: "banana",
                  image: "bananas.jpg",
                },
                {
                  id: 12061,
                  name: "almonds",
                  localizedName: "almonds",
                  image: "almonds.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Place the slices on a baking sheet lined with parchment paper and freeze. Once frozen, transfer to a freezer-friendly container or freezer bag. The bananas will freeze well for up to 4 to 6 months.",
              ingredients: [
                {
                  id: 9040,
                  name: "banana",
                  localizedName: "banana",
                  image: "bananas.jpg",
                },
              ],
              equipment: [
                {
                  id: 404770,
                  name: "baking paper",
                  localizedName: "baking paper",
                  image: "baking-paper.jpg",
                },
                {
                  id: 404727,
                  name: "baking sheet",
                  localizedName: "baking sheet",
                  image: "baking-sheet.jpg",
                },
              ],
            },
          ],
        },
      ],
      spoonacularScore: 69.83148193359375,
      spoonacularSourceUrl:
        "https://spoonacular.com/cherry-coconut-milk-smoothie-794350",
    },
  ],
  offset: 0,
  number: 2,
  totalResults: 29,
};

export const RecipeSearch = () => {
  const [searchType, setSearchType] = useState("name");
  const [filter, setFilter] = useState("both");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(data.results);

  function handleFilter(input) {
    setFilter(input);
  }
  function handleInput(input) {
    setSearchInput(input);
  }
  async function handleSearch() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?titleMatch=${searchInput}&addRecipeInformation=true&fillIngredients&number=10&apiKey=71bc3e4381ff4c3db012ffaf603dc32a`
      );
      console.log(response);

      const json = await response.json();
      console.log(json.results);
      setResults(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="lg:px-32 bg-orange-100">
      <div className="xl:w-1/2 py-14 flex flex-col gap-4">
        <h1 className="text-5xl text-left">Recipe search</h1>
        <div className="flex gap-x-5">
          <input
            placeholder="Search..."
            className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm w-full h-10"
            onChange={(e) => handleInput(e.target.value)}
          ></input>
          <button
            className="bg-gray-400 rounded-sm px-5"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex">
          <div className="flex">
            <p className="pr-3">Filter:</p>
            <button
              className={`btn ${filter === "meals" ? "underline" : ""}`}
              onClick={() => handleFilter("meals")}
            >
              Meals
            </button>
            <span className="lg:px-2">/</span>
            <button
              className={`btn ${filter === "drinks" ? "underline" : ""}`}
              onClick={() => handleFilter("drinks")}
            >
              Drinks
            </button>
            <span className="lg:px-2">/</span>
            <button
              className={`btn ${filter === "both" ? "underline" : ""}`}
              onClick={() => handleFilter("both")}
            >
              Both
            </button>
          </div>
          <div className="flex ml-auto">
            <p className="pr-3">Search by:</p>{" "}
            <button
              className={`btn ${
                searchType === "incredients" ? "underline" : ""
              }`}
              onClick={() => setSearchType("incredients")}
            >
              Incredients
            </button>
            <span className="lg:px-2">/</span>
            <button
              className={`btn ${searchType === "name" ? "underline" : ""}`}
              onClick={() => setSearchType("name")}
            >
              Name
            </button>
          </div>
        </div>
      </div>
      <section className="p-4 bg-white">
        <ul>
          {results.map((recipe) => (
            <li className="bg-orange-100 p-10 rounded-xl m-5" key={recipe.id}>
              <div className="flex">
                {/* <div className="bg-gray-500 w-32 h-36"></div> */}
                <img src={recipe.image} alt={recipe.title} />
                <div className="flex flex-col px-8">
                  <Link to={`/recipe/${recipe.id}`}>
                    <h2 className="text-4xl text-left">{recipe.title}</h2>
                  </Link>
                  <ul className="flex gap-2">
                    <li>Egg</li>
                    <li>Flour</li>
                    <li>sugar</li>
                  </ul>
                  <div className="flex text-gray-400 gap-x-2">
                    {recipe.dishTypes.map((type) => (
                      <p>#{type}</p>
                    ))}
                  </div>
                  <p className="text-sm bg-gray-500 text-white rounded mt-auto">
                    World
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
