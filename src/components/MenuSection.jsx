import FreshProducts from "../assets/fresh-products.png";
import SkilledChefs from "../assets/skilled-chefs.png";
import Vegan from "../assets/vegan.png";
import Dessert from "../assets/dessert.png";
import Steak from "../assets/steak.jpg";

function MenuSection() {
  return (
    <section id="portfolio" className="py-10 bg-slate text-white min-h-screen">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-10">
        <div className="bg-blueblack p-6 md:p-10 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img
                  src={FreshProducts}
                  alt="Fresh Products"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fresh Products</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit
                libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img
                  src={SkilledChefs}
                  alt="Skilled Chefs"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skilled Chefs</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit
                libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img
                  src={Vegan}
                  alt="Bamboo Bar`s Best Bar"
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Bamboo Bar`s Best Bar
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit
                libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img src={Dessert} alt="Vegan Cuisine" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vegan Cuisine</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                amet magna suscipit, fermentum mattis erat rutrum. Sed suscipit
                libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <img
            src={Steak}
            alt="Steak"
            className="w-full h-auto sm:w-3/4 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
