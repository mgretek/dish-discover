import { React } from "react";

import { RandomRecipes } from "../components/randomRecipes/RandomRecipes.js";
import { RandomDrinks } from "../components/randomRecipes/RandomDrinks.js";
import { HomepageHeader } from "../components/homepage/HomepageHeader.js";
import { HomepageContent } from "../components/homepage/HomepageContent.js";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-24 md:mt-36 mb-20 mx-2 sm:mx-10 xl:max-w-6xl xl:mx-auto">
        <HomepageHeader title="Discover 1000+ meals" />

        <div className="h-1 bg-gradient-to-r from-violet-300 via-pink-200 to-white pl-1 mb-4"></div>
        <HomepageContent text="Dive into a variety of meal recipes, from quick weeknight options to gourmet weekend dishes. Discover new flavors and cooking techniques for a satisfying dining experience." />
        <RandomRecipes />
        <div className="mt-10 md:mt-14">
          <RandomRecipes />
        </div>
      </div>
    </div>
  );
};
