import { useState } from "react";

export const Recipe = () => {
  const [searchType, setSearchType] = useState("name");
  const [filter, setFilter] = useState("both");

  return (
    <div className="lg:px-32">
      <div className="xl:w-1/2 py-14 flex flex-col gap-4">
        <h1 className="text-5xl text-left">Recipe search</h1>
        <div className="flex gap-x-5">
          <input
            placeholder="Search..."
            className="bg-gray-50 flex border border-gray-300 text-gray-900 text-sm w-full h-10"
          ></input>
          <button className="bg-gray-400 rounded-sm px-5">Search</button>
        </div>
        <div class="flex">
          <div className="flex">
            <p className="pr-3">Filter:</p>
            <button class="btn">Meals</button>
            <span className="lg:px-2">/</span>
            <button class="btn">Drinks</button>
            <span className="lg:px-2">/</span>
            <button class="btn">Both</button>
          </div>
          <div className="flex ml-auto">
            <p className="pr-3">Search by:</p>{" "}
            <button class="btn">Incredients</button>
            <span className="lg:px-2">/</span>
            <button class="btn">Name</button>
          </div>
        </div>
      </div>
      <section className="p-4 bg-gray-300">
        <ul>
          <li className="bg-white p-4 rounded mb-4">
            <div className="flex">
              <div className="bg-gray-500 w-32 h-36"></div>
              <div className="flex flex-col px-8">
                <h2 className="text-4xl">Pancakes</h2>
                <ul className="flex gap-2">
                  <li>Egg</li>
                  <li>Flour</li>
                  <li>sugar</li>
                </ul>
                <p className="text-sm bg-gray-500 text-white rounded mt-auto">
                  World
                </p>
              </div>
            </div>
          </li>
          <li className="bg-white p-4 rounded mb-4">
            <div className="flex">
              <div className="bg-gray-500 w-32 h-36"></div>
              <div className="flex flex-col px-8">
                <h2 className="text-4xl">Avocado</h2>
                <ul className="flex gap-2">
                  <li>Egg</li>
                  <li>Flour</li>
                  <li>sugar</li>
                </ul>
                <p className="text-sm bg-gray-500 text-white rounded mt-auto">
                  Estonian
                </p>
              </div>
            </div>
          </li>
          <li className="bg-white p-4 rounded mb-4">
            <div className="flex">
              <div className="bg-gray-500 w-32 h-36"></div>
              <div className="flex flex-col px-8">
                <h2 className="text-4xl">Pancakes</h2>
                <ul className="flex gap-2">
                  <li>Egg</li>
                  <li>Flour</li>
                  <li>sugar</li>
                </ul>
                <p className="text-sm bg-gray-500 text-white rounded mt-auto">
                  Italian
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
