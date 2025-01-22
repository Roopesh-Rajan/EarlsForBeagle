import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swoosh from "../assets/swoosh.png";
import DishImage from "../assets/dish.jpg";
import ProfileImage from "../assets/profile.jpg";

const Testimonial = () => {
  return (
    <div className="bg-slate text-white p-12">
      <div className="container mx-auto grid grid-cols-2 items-center gap-8">
        <div>
          <img
            src={DishImage}
            alt="Dish"
            className="rounded-full w-full h-auto shadow-black"
          />
        </div>
        <div>
          <p className="text-5xl text-gold font-title mb-2">Client Feedback</p>
          <h2 className="text-4xl font-bold mb-4">
            What believe <span className="text-yellow-500">our customers</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet <br />
            magna suscipit.
          </p>
          <div>
            <img src={Swoosh} alt="swoosh" className="w-16 pb-7 pt-0" />
          </div>
          <div className="flex items-center gap-4">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-xl font-semibold">Jon Hafiz</h4>
              <p className="text-sm text-gray-400">CTO</p>
            </div>
          </div>
          <p className="text-gray-300 mt-4">
            Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet
            magna suscipit, fermentum mattis erat rutrum. Sed suscipit libero
            lectus, at ullamcorper erat feugiat eu.
          </p>
          <div className="flex items-center gap-4 mt-6 text-yellow-500">
            <AiOutlineLeft className="text-2xl cursor-pointer" />
            <AiOutlineRight className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
