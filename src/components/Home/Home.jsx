const Home = () => {
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: "calc(100vh - 4rem - 4rem)" }}
    >
      {/* Hero Section */}
      <section className="bg-slate-800 text-white flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Meal Recipes
        </h1>
        <p className="text-md sm:text-lg md:text-xl max-w-lg sm:max-w-2xl mx-auto mb-6">
          Discover delicious recipes from around the world! Our curated
          collection brings you easy-to-follow meals, inspiring ideas, and
          culinary tips to delight your taste buds.
        </p>
        <p className="text-sm sm:text-md md:text-lg max-w-md sm:max-w-xl mx-auto text-gray-200">
          From quick weeknight dinners to gourmet dishes, explore recipes that
          are both tasty and healthy. Your next favorite meal is just a click
          away!
        </p>
      </section>

      {/* Features / Description Section */}
      <section className="bg-gray-100 flex-1 flex flex-col px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 py-4 sm:py-6 text-center sm:text-left">
          Why Choose Our Recipes?
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-center items-start sm:items-center text-center sm:text-center gap-8 sm:gap-10">
          {/* Feature 1 */}
          <div className="flex-1 p-4">
            <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-2 border rounded-2xl w-40 sm:w-52 mx-auto">
              1
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg mt-4">
              Every recipe is carefully tested and explained step-by-step so you
              can cook with confidence. We bring you meals that are not only
              flavorful but also easy to prepare.
            </p>
          </div>

          {/* Divider (only visible on md and above for vertical lines) */}
          <div className="hidden md:block w-1 bg-gray-300 h-40"></div>

          {/* Feature 2 */}
          <div className="flex-1 p-4">
            <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-2 border rounded-2xl w-40 sm:w-52 mx-auto">
              2
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg mt-4">
              Join thousands of food enthusiasts who trust our site for
              inspiration, variety, and authentic taste. Cooking has never been
              this fun and satisfying!
            </p>
          </div>

          <div className="hidden md:block w-1 bg-gray-300 h-40"></div>

          {/* Feature 3 */}
          <div className="flex-1 p-4 -mt-4 sm:-mt-14">
            <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-2 border rounded-2xl w-40 sm:w-52 mx-auto">
              3
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg mt-4">
              Explore, cook, and enjoy meals that make every day delicious. Your
              culinary adventure starts here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
