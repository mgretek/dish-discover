import React from "react";

export const RecipeSteps = ({ recipe }) => {
  return (
    <div className="max-w-full">
      {recipe.analyzedInstructions[0].steps.map((step, index) => (
        <div key={index} className="mb-6">
          <div className="">
            <p className="font-semibold text-md md:txt-lg text-gray-800 mb-1">
              Step {step.number}{" "}
            </p>
          </div>
          <div className="mb-1 text-gray-600">
            {step.ingredients.length > 0 && (
              <div className="flex gap-x-1 italic text-sm">
                <p>Ingredients:</p>
                <ul>
                  <li>
                    {step.ingredients.map((ingredient, i) => {
                      return (
                        <React.Fragment key={i}>
                          {ingredient.name}
                          {i !== step.ingredients.length - 1 ? ", " : ""}
                        </React.Fragment>
                      );
                    })}
                  </li>
                </ul>
              </div>
            )}
            {step.equipment.length > 0 && (
              <div className="flex gap-1 italic text-sm">
                <p>Equipment:</p>
                <ul>
                  <li>
                    {step.equipment.map((equip, j) => {
                      return (
                        <React.Fragment key={j}>
                          {equip.name}
                          {j !== step.equipment.length - 1 ? ", " : ""}
                        </React.Fragment>
                      );
                    })}
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span className="text-md text-gray-900">{step.step}</span>
        </div>
      ))}
    </div>
  );
};
