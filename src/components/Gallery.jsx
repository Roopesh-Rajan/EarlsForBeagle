import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Burger from "../assets/burger.jpg";
import Cake from "../assets/cake.jpg";
import Cheese from "../assets/cheese.jpg";
import Drink1 from "../assets/drink1.jpg";
import Drink2 from "../assets/drink2.jpg";
import Egg from "../assets/egg.jpg";
import Grill from "../assets/grill.jpg";
import Kebab from "../assets/kebab.jpg";
import Pancakes from "../assets/pancakes.jpg";
import Ribs from "../assets/ribs.jpg";
import Salad from "../assets/salad.jpg";

function Gallery() {
  const images = [
    { src: Burger, name: "Burger" },
    { src: Cake, name: "Cake" },
    { src: Cheese, name: "Cheese" },
    { src: Drink1, name: "Mojito" },
    { src: Drink2, name: "Strawberry Smoothie" },
    { src: Egg, name: "Egg" },
    { src: Grill, name: "Grill" },
    { src: Kebab, name: "Kebab" },
    { src: Pancakes, name: "Pancakes" },
    { src: Ribs, name: "Ribs" },
    { src: Salad, name: "Salad" },
  ];

  return (
    <div id="gallery" className="bg-slate mx-auto py-12 px-4 lg:px-8 overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-title mb-8 text-center text-gold">
        Our Specialities
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
          
              <div className="w-72 h-48">
                <img
                  src={image.src}
                  alt={image.name}
                  className="object-cover w-full h-full rounded-xl shadow-lg"
                />
              </div>
              <p className="mt-3 text-lg md:text-xl font-serif text-white">
                {image.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
