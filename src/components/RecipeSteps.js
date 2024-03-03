export const RecipeSteps = ({ recipe }) => {
  return (
    <div>
      <div className="max-w-full">
        {recipe.analyzedInstructions[0].steps.map((step, index) => (
          <div key={index} className="mb-4">
            <div className="">
              <p className="font-semibold text-md md:txt-lg text-gray-800 mb-1">
                Step {step.number}{" "}
              </p>
              <span className="text-md">{step.step}</span>
            </div>
            <div>
              {step.ingredients.length > 0 && (
                <div className="flex gap-x-1">
                  <p>Ingredients:</p>
                  <ul className="">
                    {step.ingredients.map((ingredient, i) => (
                      <li key={i}>
                        {ingredient.name}
                        {i !== step.ingredients.length - 1 ? "," : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {step.equipment.length > 0 && (
                <div className="flex gap-1">
                  <p>Equipment:</p>
                  <ul>
                    {step.equipment.map((equip, j) => (
                      <li key={j}>
                        {equip.name}
                        {j !== step.equipment.length - 1 ? ", " : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
