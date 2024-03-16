import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import { Loading } from "../components/loading/Loading";
import { FilterButton } from "../components/recipesearch/FilterButton";
import { SearchIcon } from "../components/icons/SearchIcon";

// const apiKey = "3b6f5c130d8144cdbf343ff51431d254";
// const apiKey = "8c7408891f0843b7a5b62b8bd041580d";
// const apiKey = "ce8f62b9c28943eeb68a1f734847059a";
const apiKey = "da2c9951c50f4074ad413ff879110743";
/* const apiKey = "33850490cff6451f9704d9b995785d53"; */

export const RecipeSearch = () => {
  const [filter, setFilter] = useState("both");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState(results);
  const [isLoading, setIsLoading] = useState(false);

  // make initial search after page load
  useEffect(() => {
    setSearchInput("Avocado");
    handleSearch();
  }, []);

  // reset filter
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
    <div className="min-h-screen ">
      <div className="mx-4 md:px-20 xl:px-60">
        {/* Searchbar section */}
        <div className="pt-16 pb-8 flex flex-col gap-4 w-full">
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
              onClick={handleSearch}>
              <SearchIcon className="w-4 text-violet-400" />
            </button>
          </div>
          {/* Search filter section */}
          <div className="flex text-gray-700 gap-x-6 flex-wrap">
            <div className="flex items-center mb-2 md:mb-1">
              <p className="pr-1 text-gray-700 font-semibold">Filter</p>
              <FilterButton
                globalFilter={filter}
                filterName={"meals"}
                buttonTitle={"meals"}
                onClick={() => handleFilter("meals")}
              />
              <FilterButton
                globalFilter={filter}
                filterName={"drink"}
                buttonTitle={"drinks"}
                onClick={() => handleFilter("drink")}
              />
              <FilterButton
                globalFilter={filter}
                filterName={"both"}
                buttonTitle={"both"}
                onClick={() => handleFilter("both")}
              />
            </div>
          </div>
        </div>

        {/* Search results section */}
        <section className="p-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {!isLoading &&
            filteredResults.map((recipe) => (
              <div className="bg-white-100" key={recipe.id}>
                <div className="flex flex-wrap sm:flex-nowrap lg:flex-col lg:mx-auto gap-x-4">
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
