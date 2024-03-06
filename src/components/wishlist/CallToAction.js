import React from "react";

export default function CallToAction() {
  return (
    <div className="px-6 sm:px-16 mt-8 sm:mt-16 mx-6 sm:mx-auto max-w-[620px] min-h-full border-2 border-violet-200 rounded-md">
      <h2 className="mt-14 text-center text-3xl sm:text-5xl font-semibold text-gray-800 mb-10">
        Please log in to use wishlists
      </h2>
      <p className="text-md sm:text-lg text-center mb-16 text-gray-700">
        Here you can create lists of your favourite recipes. Imagine finding
        those exact pancakes that would make an excellent sunday morning dish.
        Create a special Sunday list and add the recipe to your list, so you
        would find those pancakes easily with just a couple of clicks!
      </p>
    </div>
  );
}
