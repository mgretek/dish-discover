import { React } from "react";

import { RandomRecipes } from "../components/randomRecipes/RandomRecipes.js";
import { RandomDrinks } from "../components/randomRecipes/RandomDrinks.js";
import { HomepageHeader } from "../components/homepage/HomepageHeader.js";
import { HomepageContent } from "../components/homepage/HomepageContent.js";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mt-24 mx-2 sm:mx-10 xl:max-w-6xl xl:mx-auto">
        <HomepageHeader title="Discover 1000+ meals" />
        <HomepageContent text="Dive into a variety of meal recipes, from quick weeknight options to gourmet weekend dishes. Discover new flavors and cooking techniques for a satisfying dining experience." />
        <RandomRecipes />
        <div className="mt-20">
          <HomepageHeader title="Discover 1500+ drinks & cocktails" />
          <HomepageContent text="Quench your thirst with our collection of drink recipes, offering everything from revitalizing smoothies to crafted cocktails. Explore a variety of flavors and find the perfect sip for any occasion." />
          <RandomDrinks />
        </div>
      </div>
    </div>
  );
};
