import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

//Only for development – using dummy data instead of API
import dummydata from "../../config/dummydata/dummydata-meals.js";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

// const apiKey = "3b6f5c130d8144cdbf343ff51431d254";
// const apiKey = "8c7408891f0843b7a5b62b8bd041580d";
// const apiKey = "ce8f62b9c28943eeb68a1f734847059a";
const apiKey = "abebc2e2899343ea9485cc2a513f6a4c"; //10minutemail.one

export const RandomRecipes = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("randomRecipes")) {
      let unparsedData = sessionStorage.getItem("randomRecipes");
      setData(JSON.parse(unparsedData));
    } else {
      console.log("doing an api call");
      fetch(
        `https://api.spoonacular.com/recipes/random?number=24&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    }
  }, []);

  if (data) {
    sessionStorage.setItem("randomRecipes", JSON.stringify(data));
  }

  // //Only for development – using dummy data instead of API
  // useEffect(() => {
  //   setData(dummydata());
  // }, []);

  return (
    <div>
      <div>
        <div className="flex gap-5 items-center justify-center mb-6">
          <Swiper
            breakpoints={{
              340: {
                width: 340,
                slidesPerView: 2,
                spaceBetween: 15,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
              700: {
                width: 700,

                slidesPerView: 4,
                spaceBetween: 15,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
            }}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}
          >
            {data
              ? data.recipes.map((recipe) => (
                  <SwiperSlide
                    key={recipe.id}
                    className="p-3 gap-10 bg-gray-100 border border-gray-200 drop-shadow-md rounded-lg"
                  >
                    <div>
                      <div className="aspect-w-4 aspect-h-3">
                        {recipe.image ? (
                          <img
                            className="mb-2 rounded-lg "
                            src={recipe.image}
                            alt={recipe.title}
                          />
                        ) : (
                          <div
                            className="flex items-center justify-start w-full h-full bg-right bg-cover mb-2 rounded-lg"
                            style={{
                              backgroundImage:
                                "url(/images/placeholder-min.jpg)",
                            }}
                          >
                            <span className="text-xs font-semibold text-gray-600 w-2/6 pl-3">
                              Sorry, no image available
                            </span>
                          </div>
                        )}
                      </div>

                      <Link to={`/recipe/${recipe.id}`}>
                        <div className="mb-1 text-md text-gray-800 font-semibold h-[45px] sm:h-[70px] mt-4">
                          {truncateString(recipe.title, 45)}
                        </div>
                      </Link>

                      <div className="h-1 bg-gradient-to-r from-violet-300 via-pink-200 to-gray-100 pl-1 mb-2"></div>

                      <div className="flex justify-between">
                        <div className="text-xs text-gray-800">
                          Time: {recipe.readyInMinutes} min
                        </div>
                        <div className="text-xs text-gray-800">
                          Score: {Number(recipe.spoonacularScore.toFixed(2))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : "Loading..."}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

//700px-819px : jump from 2 to 4 cards and text doesn't fit anymore. would be ok, if 2 -> 4 would happen at 820px (not 700px)
//prolly have to create custom breakpoints?
