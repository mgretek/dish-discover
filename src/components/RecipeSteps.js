export const RecipeSteps = ({ recipe }) => {
  return (
    <div>
      {recipe.analyzedInstructions[0].steps.map((step, index) => (
        <div key={index} className="mb-4">
          <p className=" text-lg">
            {step.number}: {step.step}
          </p>
          <div>
            {step.ingredients.length > 0 && (
              <div className="flex gap-x-1">
                <p>Ingredients:</p>
                <ul className="flex gap-1">
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
  );
};
