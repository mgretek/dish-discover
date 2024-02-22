import { React } from "react";

import { RandomRecipes } from "../components/RandomRecipes.js";
import { RandomDrinks } from "../components/RandomDrinks.js";
import { HomepageHeader } from "../components/HomepageHeader.js";
import { HomepageContent } from "../components/HomepageContent.js";

export const Home = () => {
  return (
    <div className="mt-24">
      <HomepageHeader title="Discover 1000+ meals" />
      <HomepageContent text="Come and discover stuff!" />
      <RandomRecipes />
      <div className="mt-20">
        <HomepageHeader title="Discover 1500+ drinks & cocktails" />
        <HomepageContent text="Come and discover stuff!" />
        <RandomDrinks />
      </div>
    </div>
  );
};
