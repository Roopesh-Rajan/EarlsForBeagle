import HeroImage from '/src/assets/Hero.png';

function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
      className="relative bg-cover bg-center h-screen text-center text-white flex justify-center items-center"
    >
      <div className="bg-opacity-50 p-8 flex flex-col items-center sm:items-start sm:ml-16 sm:px-6">
        <h2 className=' text-gold font-title text-5xl '>
          Welcome To Earls
        </h2>
        <h2 className="text-5xl font-Rubik ">
          THE FINEST <span className='text-gold'> DRINKS</span>
        </h2>
        <p className="mt-4 text-lg text-center max-w-2xl sm:text-base sm:text-left sm:max-w-none">
          Discover the best cocktails and beverages served with style and quality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="mt-6 px-6 py-3 border border-gold bg-primary hover:bg-[#d9973b] text-white hover:bg-primary-light transition sm:px-4 sm:py-2">
          View More
        </button>
      </div>
    </section>
  );
}

export default Hero;
