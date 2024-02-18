import { React } from "react";

import { RandomRecipes } from "../components/RandomRecipes.js";

export const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>Discover meals:</div>
      <RandomRecipes />
    </div>
  );
};
