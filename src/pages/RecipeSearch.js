import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import { loadWishlists } from "../components/wishlist/wishlists"; */
import { Loading } from "../components/loading/Loading";
import { SearchIcon } from "../components/icons/SearchIcon";

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
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 6,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 1,
      healthScore: 6,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 86.43,
      id: 664480,
      title: "Vegan Pumpkin Pie Milkshake",
      readyInMinutes: 45,
      servings: 3,
      sourceUrl:
        "https://www.foodista.com/recipe/P8MNDQKK/vegan-pumpkin-pie-milkshake",
      image: "https://spoonacular.com/recipeImages/664480-312x231.jpg",
      imageType: "jpg",
      summary:
        'Vegan Pumpkin Pie Milkshake requires around <b>45 minutes</b> from start to finish. This beverage has <b>193 calories</b>, <b>2g of protein</b>, and <b>11g of fat</b> per serving. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs <b>86 cents per serving</b>. 1 person were impressed by this recipe. <b>Thanksgiving</b> will be even more special with this recipe. Head to the store and pick up pumpkin butter, coconut oil, ice cubes, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 37%</b>, which is not so excellent. <a href="https://spoonacular.com/recipes/pumpkin-pie-milkshake-with-pie-crust-straws-185133">Pumpkin Pie MilkShake with Pie Crust Straws</a>, <a href="https://spoonacular.com/recipes/pumpkin-pie-milkshake-248253">Pumpkin Pie Milkshake</a>, and <a href="https://spoonacular.com/recipes/pumpkin-pie-milkshake-826449">Pumpkin Pie Milkshake</a> are very similar to this recipe.',
      cuisines: [],
      dishTypes: ["beverage", "drink"],
      diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: ["thanksgiving"],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Combine all ingredients in a blender and pulse until smooth",
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
              step: "Top with soy based whip cream, sprinkle with additional graham crackers and cinnamon.",
              ingredients: [
                {
                  id: 18617,
                  name: "graham crackers",
                  localizedName: "graham crackers",
                  image: "graham-crackers.jpg",
                },
                {
                  id: 2010,
                  name: "cinnamon",
                  localizedName: "cinnamon",
                  image: "cinnamon.jpg",
                },
                {
                  id: 1053,
                  name: "cream",
                  localizedName: "cream",
                  image: "fluid-cream.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Garnish with a cinnamon stick.",
              ingredients: [
                {
                  id: 1002010,
                  name: "cinnamon stick",
                  localizedName: "cinnamon stick",
                  image: "cinnamon.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 4,
              step: "Serves 3-4",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularScore: 44.93061447143555,
      spoonacularSourceUrl:
        "https://spoonacular.com/vegan-pumpkin-pie-milkshake-664480",
    },
    {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 6,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 1,
      healthScore: 3,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 136.2,
      id: 664468,
      title: "Vegan Peach Cobbler Milkshake",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl:
        "https://www.foodista.com/recipe/2FPB43SZ/vegan-peach-cobbler-milkshake",
      image: "https://spoonacular.com/recipeImages/664468-312x231.jpg",
      imageType: "jpg",
      summary:
        'You can never have too many Southern recipes, so give Vegan Peach Cobbler Milkshake a try. This beverage has <b>228 calories</b>, <b>2g of protein</b>, and <b>9g of fat</b> per serving. This dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs <b>$1.36 per serving</b>. 1 person were glad they tried this recipe. This recipe from Foodista requires peaches, old fashioned oats, nutmeg, and banana. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 29%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/vegan-peach-cobbler-754959">Vegan Peach Cobbler</a>, <a href="https://spoonacular.com/recipes/vegan-paleo-peach-cobbler-1643201">Vegan Paleo Peach Cobbler</a>, and <a href="https://spoonacular.com/recipes/easy-vegan-microwave-peach-cobbler-611869">Easy Vegan Microwave Peach Cobbler</a>.',
      cuisines: ["Southern"],
      dishTypes: ["beverage", "drink"],
      diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Combine all ingredients in a blender and pulse until smooth",
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
              step: "Top with soy based whip cream, sprinkle with additional graham crackers and cinnamon.",
              ingredients: [
                {
                  id: 18617,
                  name: "graham crackers",
                  localizedName: "graham crackers",
                  image: "graham-crackers.jpg",
                },
                {
                  id: 2010,
                  name: "cinnamon",
                  localizedName: "cinnamon",
                  image: "cinnamon.jpg",
                },
                {
                  id: 1053,
                  name: "cream",
                  localizedName: "cream",
                  image: "fluid-cream.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Garnish with a peach slice.",
              ingredients: [
                {
                  id: 9236,
                  name: "peach",
                  localizedName: "peach",
                  image: "peach.png",
                },
              ],
              equipment: [],
            },
            {
              number: 4,
              step: "Serves 3-4",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularScore: 36.12247085571289,
      spoonacularSourceUrl:
        "https://spoonacular.com/vegan-peach-cobbler-milkshake-664468",
    },
    {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 12,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 20,
      healthScore: 1,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 81.11,
      id: 639749,
      title: "Coconut Cream Pie Vegan Milkshake",
      readyInMinutes: 45,
      servings: 3,
      sourceUrl:
        "https://www.foodista.com/recipe/LF26X6K8/coconut-cream-pie-vegan-milkshake",
      image: "https://spoonacular.com/recipeImages/639749-312x231.jpg",
      imageType: "jpg",
      summary:
        'Coconut Cream Pie Vegan Milkshake might be just the beverage you are searching for. This recipe makes 3 servings with <b>268 calories</b>, <b>2g of protein</b>, and <b>20g of fat</b> each. For <b>81 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 20 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Head to the store and pick up coconut milk, banana, coconut oil, and a few other things to make it today. It is a good option if you\'re following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>rather bad spoonacular score of 25%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/the-best-vegan-coconut-cream-pie-1734675">The Best Vegan Coconut Cream Pie</a>, <a href="https://spoonacular.com/recipes/vegan-chocolate-coconut-cream-pie-485486">Vegan Chocolate Coconut Cream Pie</a>, and <a href="https://spoonacular.com/recipes/easy-vegan-coconut-cream-pie-1662527">Easy Vegan Coconut Cream Pie</a>.',
      cuisines: [],
      dishTypes: ["beverage", "drink"],
      diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Combine coconut meat, lemon juice, coconut oil, coconut milk, banana, vanilla, agave nectar (optional) and graham cracker crumbs in a blender; pulse until smooth.",
              ingredients: [
                {
                  id: 10018617,
                  name: "graham cracker crumbs",
                  localizedName: "graham cracker crumbs",
                  image: "graham-crackers.jpg",
                },
                {
                  id: 19912,
                  name: "agave",
                  localizedName: "agave",
                  image: "agave.png",
                },
                {
                  id: 10012104,
                  name: "coconut meat",
                  localizedName: "coconut meat",
                  image: "coconut.jpg",
                },
                {
                  id: 12118,
                  name: "coconut milk",
                  localizedName: "coconut milk",
                  image: "coconut-milk.png",
                },
                {
                  id: 4047,
                  name: "coconut oil",
                  localizedName: "coconut oil",
                  image: "oil-coconut.jpg",
                },
                {
                  id: 9152,
                  name: "lemon juice",
                  localizedName: "lemon juice",
                  image: "lemon-juice.jpg",
                },
                {
                  id: 1052050,
                  name: "vanilla",
                  localizedName: "vanilla",
                  image: "vanilla.jpg",
                },
                {
                  id: 9040,
                  name: "banana",
                  localizedName: "banana",
                  image: "bananas.jpg",
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
              step: "Top with soy or dairy based whip cream, sprinkle with additional graham crackers and garnish with toasted coconut flakes.",
              ingredients: [
                {
                  id: 18617,
                  name: "graham crackers",
                  localizedName: "graham crackers",
                  image: "graham-crackers.jpg",
                },
                {
                  id: 12108,
                  name: "coconut flakes",
                  localizedName: "coconut flakes",
                  image: "coconut-flakes.png",
                },
                {
                  id: 1053,
                  name: "cream",
                  localizedName: "cream",
                  image: "fluid-cream.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 3,
              step: "Serves 2-3",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularScore: 30.027591705322266,
      spoonacularSourceUrl:
        "https://spoonacular.com/coconut-cream-pie-vegan-milkshake-639749",
    },
    {
      vegetarian: true,
      vegan: true,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 6,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 1,
      healthScore: 0,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 70.65,
      id: 646486,
      title: "Healthy Key Lime Pie Milkshake",
      readyInMinutes: 15,
      servings: 4,
      sourceUrl:
        "http://www.foodista.com/recipe/7FMVBZSY/healthy-key-lime-pie-milkshake",
      image: "https://spoonacular.com/recipeImages/646486-312x231.jpg",
      imageType: "jpg",
      summary:
        'Healthy Key Lime Pie Milkshake might be just the beverage you are searching for. This recipe serves 4. One portion of this dish contains about <b>1g of protein</b>, <b>11g of fat</b>, and a total of <b>160 calories</b>. For <b>71 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. A mixture of vanillan extract, ice cubes, key lime juice, and a handful of other ingredients are all it takes to make this recipe so delicious. This recipe is liked by 1 foodies and cooks. It is brought to you by Foodista. It is a good option if you\'re following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 12%</b>, which is not so amazing. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/key-lime-pie-milkshake-549388">Key Lime Pie Milkshake</a>, <a href="https://spoonacular.com/recipes/key-lime-pie-milkshake-585042">Key Lime Pie Milkshake</a>, and <a href="https://spoonacular.com/recipes/healthy-key-lime-pie-1063124">Healthy Key Lime Pie</a>.',
      cuisines: [],
      dishTypes: ["dessert", "beverage", "drink"],
      diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
      occasions: [],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Combine all ingredients in a blender and pulse until smooth",
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
              step: "Top with soy or dairy based whip cream, sprinkle with additional graham crackers and garnish with a lime slice.",
              ingredients: [
                {
                  id: 18617,
                  name: "graham crackers",
                  localizedName: "graham crackers",
                  image: "graham-crackers.jpg",
                },
                {
                  id: 1019159,
                  name: "lime slice",
                  localizedName: "lime slice",
                  image: "lime-wedge.jpg",
                },
                {
                  id: 1053,
                  name: "cream",
                  localizedName: "cream",
                  image: "fluid-cream.jpg",
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
      spoonacularScore: 9.82670783996582,
      spoonacularSourceUrl:
        "https://spoonacular.com/healthy-key-lime-pie-milkshake-646486",
    },
  ],
  offset: 0,
  number: 2,
  totalResults: 29,
};

const apiKey = "3b6f5c130d8144cdbf343ff51431d254";
// const apiKey = "8c7408891f0843b7a5b62b8bd041580d";
// const apiKey = "ce8f62b9c28943eeb68a1f734847059a";

export const RecipeSearch = () => {
  const [searchType, setSearchType] = useState("name");
  const [filter, setFilter] = useState("both");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState(data.results);
  const [filteredResults, setFilteredResults] = useState(results);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFilter("both");
  }, []);

  useEffect(() => {
    let filteredArr;
    if (filter === "both") {
      filteredArr = results;
    } else if (filter === "meals") {
      filteredArr = results.filter(
        (item) =>
          !item.dishTypes.includes("drink") &&
          !item.dishTypes.includes("beverage")
      );
    } else {
      filteredArr = results.filter((item) => item.dishTypes.includes(filter));
    }
    setFilteredResults(filteredArr);
  }, [filter, results]);

  function handleFilter(input) {
    setFilter(input);
  }
  function handleInput(input) {
    setSearchInput(input);
  }
  async function handleSearch() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?titleMatch=${searchInput}&addRecipeInformation=true&fillIngredients&number=10&apiKey=${apiKey}`
      );
      console.log(response);

      const json = await response.json();
      console.log(json.results);
      setResults(json.results);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  const handleKeyPush = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen max-w-[576px] md:max-w-7xl mx-auto">
      <div className="flex flex-wrap mx-2 md:mx-auto md:px-20">
        {/* Searchbar section */}
        <div className="xl:w-1/2 pt-12 pb-8 md:py-14 flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-gray-800 text-left">
            Recipe search
          </h1>
          <div className="h-1.5 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-2"></div>{" "}
          {/* Searchbar */}
          <div className="relative">
            <input
              placeholder="Search..."
              className="h-10 pl-2 bg-gray-50 flex border rounded-sm border-gray-300 text-gray-800 text-md w-full focus:outline-none focus:ring-2 focus:ring-violet-300"
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={handleKeyPush}
            />
            <button
              className="absolute right-0 top-0 h-full px-3"
              onClick={handleSearch}
            >
              <SearchIcon className="w-4 text-violet-400" />
            </button>
          </div>
          {/* Search filter section */}
          <div className="flex text-gray-700 gap-x-6 flex-wrap">
            <div className="flex items-center mb-2 md:mb-1">
              <p className="pr-1 text-gray-700 font-semibold">Filter</p>

              <button
                className={`btn ${
                  filter === "meals"
                    ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => handleFilter("meals")}
              >
                <span className="px-2 py-1">Meals</span>
              </button>

              <button
                className={`btn ${
                  filter === "drink"
                    ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => handleFilter("drink")}
              >
                <span className="px-2">Drinks</span>
              </button>
              <button
                className={`btn ${
                  filter === "both"
                    ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => handleFilter("both")}
              >
                <span className="px-2">Both</span>
              </button>
            </div>

            {/* <div className="flex items-center mb-1">
              <p className="pr-1 text-gray-700 font-semibold">Search by</p>{" "}
              <button
                className={`btn ${
                  searchType === "incredients"
                    ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSearchType("incredients")}>
                <span className="px-2">Ingredient</span>
              </button>
              <button
                className={`btn ${
                  searchType === "name"
                    ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setSearchType("name")}>
                <span className="px-2">Name</span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Search results section */}
        <section className="p-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {!isLoading &&
            filteredResults.map((recipe) => (
              <div className="bg-white-100" key={recipe.id}>
                <div className="flex flex-wrap sm:flex-nowrap lg:flex-col lg:mx-auto gap-x-4">
                  {/* <div className="bg-gray-500 w-32 h-36"></div> */}
                  <img src={recipe.image} alt={recipe.title} />
                  <div className="flex flex-col lg:items-center lg:text-center text-wrap">
                    <Link to={`/recipe/${recipe.id}`}>
                      <h2 className="text-xl font-semibold mt-4">
                        {recipe.title}
                      </h2>
                    </Link>
                    <ul className="flex gap-2">
                      <li>Egg</li>
                      <li>Flour</li>
                      <li>sugar</li>
                    </ul>
                    <div className="text-gray-400">
                      {recipe.dishTypes.map((type) => (
                        <span>#{type} </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {isLoading && <Loading />}
        </section>
      </div>
    </div>
  );
};
