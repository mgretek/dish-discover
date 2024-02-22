import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

//Only for development – using dummy data instead of API
import dummydata from "../dummydata/dummydata-drinks.js";

export const RandomDrinks = () => {
  const [data, setData] = useState(null);

  //For production - API call
  // useEffect(() => {
  //   fetch(
  //     "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=8c7408891f0843b7a5b62b8bd041580d"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  //Only for development – using dummy data instead of API
  useEffect(() => {
    setData(dummydata());
  }, []);

  return (
    <div>
      <div>
        <div className="flex gap-5 items-center justify-center">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              },
              700: {
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
              ? data.results.map((recipe) => (
                  <SwiperSlide
                    key={recipe.id}
                    className="p-5 gap-10 bg-gray-300 rounded-lg"
                  >
                    <img
                      className="mb-4 rounded-lg w-[100px] h-auto"
                      src={recipe.image}
                      alt={recipe.title}
                    />

                    <div className="text-md text-gray-800">{recipe.title}</div>
                  </SwiperSlide>
                ))
              : "Loading..."}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
