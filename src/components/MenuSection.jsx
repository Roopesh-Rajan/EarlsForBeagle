import FreshProducts from '../assets/fresh-products.png';
import SkilledChefs from '../assets/skilled-chefs.png';
import Vegan from '../assets/vegan.png';
import Dessert from '../assets/dessert.png'; 
import Steak from'../assets/steak.jpg'
function MenuSection() {
  return (
    <section id='portfolio' className="py-16 bg-slate text-white min-h-screen">
      <div className="container mx-auto grid md:grid-cols-2 gap-0 items-center pl-10">
        <div className="bg-blueblack p-6 md:p-14 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img src={FreshProducts} alt="Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fresh Products</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna
                suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img src={SkilledChefs} alt="Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Skilled Chefs</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna
                suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img src={Vegan} alt="Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Bamboo Bar`s Best Bar</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna
                suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus.
              </p>
              <a href="menu" className="text-primary">
                More View
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 hover:scale-110 transform transition duration-300 ease-in-out">
                <img src={Dessert} alt="Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Vegan Cuisine</h3>
              <p className="text-sm text-gray-400 mb-4">
                Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna
                suscipit, fermentum mattis erat rutrum. Sed suscipit libero lectus.
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
            alt="steak"
            className="w-full h-auto md:w-3/4 md:h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default MenuSection;

