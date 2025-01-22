
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
    <div id="gallery" className="container bg-slate mx-auto p-2">
      <h2 className="text-6xl  font-title mb-6 text-center text-gold">
Our Specialities
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        {Array.from({ length: Math.ceil(images.length / 6) }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-3 gap-4 ">
              {images.slice(i * 6, i * 6 + 6).map((image, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image.src}
                    alt={image.name}
                    className="rounded-xl w-96 h-60 object-cover shadow-lg"
                  />
                  <p className="mt-3 text-xl font-serif text-white">
                    {image.name}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
