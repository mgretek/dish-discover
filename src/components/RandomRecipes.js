import React, { useState, useEffect } from "react";

export const RandomRecipes = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=ce8f62b9c28943eeb68a1f734847059a"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {data ? (
          <div>
            {data.results.map((recipe) => (
              <div key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <div>{recipe.title}</div>
              </div>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
