import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Only for development – using dummy data instead of API
import dummydata from "../../config/dummydata/dummydata-meals.js";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

const apiKey = "d4743b46c8be46a4ae350870a07dd030";

export const RandomRecipes = () => {
  const [data, setData] = useState(null);

  //Check if data is in SessionStorage, if not, makes an API call
  useEffect(() => {
    if (sessionStorage.getItem("randomRecipes")) {
      let unparsedData = sessionStorage.getItem("randomRecipes");
      setData(JSON.parse(unparsedData));
    } else {
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

  //Slider config
  var settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "ease",
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 0,
          speed: 8000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
          speed: 700,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        {data && (
          <div className="">
            <div className="min-h-0 min-w-0">
              <Slider {...settings}>
                {data.recipes.map((recipe) => (
                  <div key={recipe.id} className="pr-8">
                    <div className="p-3 bg-gray-50 border border-gray-200 drop-shadow-md rounded-lg">
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
                          <div className="mb-1 text-md md:text-lg text-gray-800 font-semibold h-[45px] sm:h-[70px] mt-4">
                            {/* {truncateString(recipe.title, 45)} */}
                            {recipe.title}
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
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
