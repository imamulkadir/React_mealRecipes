import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData();
  const allMeals = meals.meals;
  //   console.log(meals);

  return (
    <div className="mb-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl font-semibold mb-4">
        Total Meals: {allMeals.length}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {allMeals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
