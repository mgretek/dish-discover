import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex flex-col px-6 sm:px-16 mt-8 sm:mt-16 mx-6 sm:mx-auto max-w-[620px] min-h-full border-2 border-violet-200 rounded-md">
      <h2 className="mt-14 text-center text-3xl sm:text-5xl font-semibold text-gray-800 mb-10">
        Please log in to use wishlists
      </h2>
      <p className="text-md sm:text-lg text-center mb-5 text-gray-700">
        Discover a whole new level of kitchen fun with our wishlist feature,
        exclusively for our logged-in users. Dive into a variety of recipes and
        casually save your top picks to different wishlists. It's like having
        your own personalized cookbook! Easily organize and access your favorite
        recipes whenever the mood strikes. Cooking just got a whole lot more
        convenient!
      </p>
      <Link
        to={"/login"}
        className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-2 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600 ">
        Sign in
      </Link>
    </div>
  );
}
