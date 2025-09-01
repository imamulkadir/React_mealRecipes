import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const navigate = useNavigate();

  const { idMeal, strMeal, strMealThumb } = meal;

  const handleMealDetails = () => {
    navigate(`/meal/${idMeal}`);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className=" p-2">
        <img
          src={strMealThumb}
          alt="Card Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{strMeal}</h2>
        <button
          onClick={handleMealDetails}
          className="px-5 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Show Recipe
        </button>
      </div>
    </div>
  );
};

export default Meal;
