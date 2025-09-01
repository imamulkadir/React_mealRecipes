import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
  const data = useLoaderData(); // { meals: [ ... ] }
  const meal = data.meals[0];

  const { idMeal, strMeal, strMealThumb, strInstructions } = meal;

  const navigate = useNavigate();

  const hadnleShowAllMeals = () => {
    navigate(-1);
    //   -1 will take one step backward
  };

  return (
    <div className="w-full bg-gray-300 rounded-2xl shadow-lg overflow-hidden mb-10">
      {/* Image */}
      <div className="flex justify-center p-4">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-[400px] h-auto object-fit rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* ID */}
        <p className="text-sm text-gray-500 mb-2">ID: {idMeal}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{strMeal}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {strInstructions || "No description available."}...
        </p>

        {/* Button */}
        <button
          onClick={hadnleShowAllMeals}
          className="px-5 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Show All Meals
        </button>
      </div>
    </div>
  );
};

export default MealDetails;
