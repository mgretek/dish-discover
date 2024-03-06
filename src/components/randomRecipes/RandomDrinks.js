import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

//Only for development – using dummy data instead of API
import dummydata from "../../config/dummydata/dummydata-drinks.js";

export const RandomDrinks = () => {
  const [data, setData] = useState(null);

  //For production - API call
  // useEffect(() => {
  //   fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
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
                    className="p-3 gap-10 bg-gray-100 border border-gray-200 drop-shadow-md rounded-lg"
                  >
                    <img
                      className="mb-2 rounded-lg w-max h-auto"
                      src={recipe.image}
                      alt={recipe.title}
                    />

                    <div className="mb-1 text-xl text-gray-800 font-semibold h-[55px] mt-4">
                      {recipe.title}
                    </div>
                    <div className="flex justify-between">
                      <div className="text-xs text-gray-800">
                        {recipe.preptime}
                      </div>
                      <div className="text-xs text-gray-800">
                        {recipe.rating}
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
