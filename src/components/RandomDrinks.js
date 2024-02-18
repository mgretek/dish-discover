import React, { useState, useEffect } from "react";

export const RandomDrinks = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {data ? (
          <div className="flex">
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
