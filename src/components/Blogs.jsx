/* eslint-disable react/prop-types */
import { FaRegCalendarAlt, FaRegUser, FaRegCommentDots } from "react-icons/fa";
import Eggplant from "../assets/eggplant.jpg";
import Lasagna from "../assets/lasagna.jpg";
import Swoosh from "../assets/swoosh.png";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Make a proper salad with high proteins",
      date: "January 30, 2023",
      category: "Recipes",
      image: Lasagna,
    },
    {
      id: 2,
      title: "Make the essential dish at Earl's restaurant",
      date: "February 10, 2023",
      category: "Cooking Tips",
      image: Eggplant,
    },
  ];

  return (
    <section className="py-10 px-4 bg-slate">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h4 className="text-4xl font-semibold mb-2 text-gold font-title">Blogs</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Latest <span className="text-gold font-Rubik">Updates</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet <br className="hidden md:block" />
            magna suscipit.
          </p>
          <img src={Swoosh} alt="swoosh" className="w-16 md:w-20 mx-auto py-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:px-24">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              category={post.category}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
// eslint-disable-next-line no-unused-vars
const BlogCard = ({ title, date, category, image }) => {
  return (
    <div
      id="blog"
      className="bg-blueblack text-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 md:h-56 lg:h-64 object-cover" />
      <div className="p-4 md:p-6 text-left">
        <div className="flex flex-wrap items-center text-gray-400 text-sm space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <FaRegUser />
            <span>Admin</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegCalendarAlt />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegCommentDots />
            <span>2 Comments</span>
          </div>
        </div>
        <h4 className="text-lg md:text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm md:text-base mb-4">
          Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet magna
          suscipit, fermentum mattis erat rutrum.
        </p>
        <a href="#" className="text-primary font-medium hover:underline">
          View More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
