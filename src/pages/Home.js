import { React } from "react";

import { RandomRecipes } from "../components/RandomRecipes.js";
import { RandomDrinks } from "../components/RandomDrinks.js";

export const Home = () => {
  return (
    <div className="mt-24">
      <div className="mb-4 font-bold text-xl">Discover meals</div>
      <div className="bg-slate-100">
        <RandomRecipes />
        <RandomDrinks />
      </div>
    </div>
  );
};
