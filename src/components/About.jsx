import Chocolate from "../assets/aboutchoc.jpg";
import Swoosh from "../assets/swoosh.png";

function About() {
  return (
    <section id="about" className="py-16 bg-slate text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4">
        <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2 md:ml-36">
          <h4 className="text-4xl font-title text-gold pb-7">About Us</h4>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            Heaven and Earth are between
            <span className="text-gold"> each other</span>
          </h3>
          <img src={Swoosh} alt="Swoosh" className="mb-4 w-16" />
          <p className="text-gray-300 mb-4">
            Discover a unique dining experience with the best of both worlds:
            exquisite meals and a premium atmosphere. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="mt-6 px-6 py-3  border border-gold bg-primary  hover:bg-[#d9973b] text-white  hover:bg-primary-light transition">
            Learn More
          </button>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            src={Chocolate}
            alt="About Us"
            className="rounded-lg shadow-lg w-full md:w-96 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
