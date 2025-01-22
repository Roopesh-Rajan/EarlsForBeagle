import Swoosh from "../assets/swoosh.png";
import Risotto from "../assets/risotto.jpg";
import Pizza from "../assets/pizza.jpg";
import MenuDessert from "../assets/menu-dessert.jpg";

const Menu = () => {
  const menuData = [
    {
      category: "Starter",
      items: [
        { name: "Prawn Bisque", description: "Smooth bisque topped with river prawn", price: "$59" },
        { name: "Beef Skewers", description: "Classic greek salad, barrel aged feta cheese", price: "$29" },
        { name: "Tomato Soup", description: "Smooth bisque topped with river prawn", price: "$18" },
        { name: "Petit Carp", description: "Small portion of fried carp with mashed potatoes", price: "$29" },
        { name: "Pâté de Salmon", description: "Topped with cucumber and roe", price: "$59" },
      ],
      image: Risotto,
    },
    {
      category: "Main Dish",
      items: [
        { name: "Fish Steak", description: "Smooth bisque topped with river prawn", price: "$5.95" },
        { name: "Tournedos Rossini", description: "Classic greek salad, barrel aged feta cheese", price: "$29" },
        { name: "Prawn Bisque", description: "Smooth bisque topped with river prawn", price: "$18" },
        { name: "Duck Confit", description: "Small portion of fried carp with mashed potatoes", price: "$18" },
        { name: "Sponge Cake", description: "Topped with cucumber and roe", price: "$59" },
      ],
      image: Pizza,
    },
    {
      category: "Dessert",
      items: [
        { name: "Prawn Bisque", description: "Smooth bisque topped with river prawn", price: "$59" },
        { name: "Beef Skewers", description: "Classic greek salad, barrel aged feta cheese", price: "$29" },
        { name: "Tomato Soup", description: "Smooth bisque topped with river prawn", price: "$18" },
        { name: "Petit Carp", description: "Small portion of fried carp with mashed potatoes", price: "$29" },
        { name: "Pâté de Salmon", description: "Topped with cucumber and roe", price: "$59" },
      ],
      image: MenuDessert,
    },
  ];

  return (
    <div id="menu" className="bg-slate text-white min-h-screen flex flex-col items-center px-6 py-10">
      <h2 className="text-center text-xl md:text-3xl text-gold font-title italic mb-2">
        Special selection
      </h2>
      <h1 className="text-2xl md:text-4xl font-sans">
        From <span className="text-2xl md:text-4xl font-sans text-gold">Our Menu</span>
      </h1>
      <img src={Swoosh} alt="Swoosh" className="mb-4 w-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
        {menuData.map((category, index) => (
          <div key={index}>
            {index === 0 || index === 2 ? (
              <img
                src={category.image}
                alt={`${category.category} image`}
                className="w-full h-48 md:h-56 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              />
            ) : null}
            <h3 className="text-3xl md:text-4xl text-gold font-title italic mb-4 border-b border-gold">
              {category.category}
            </h3>
            <div className="space-y-6">
              {category.items.map((item, i) => (
                <div key={i} className="pb-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <p className="text-lg">{item.price}</p>
                  </div>
                  <div className="border-b border-gold mt-2"></div>
                </div>
              ))}
            </div>
            {index === 1 ? (
              <img
                src={category.image}
                alt={`${category.category} image`}
                className="w-full h-48 md:h-56 object-cover rounded-lg mt-4 transition-transform transform hover:scale-105 hover:shadow-lg"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
