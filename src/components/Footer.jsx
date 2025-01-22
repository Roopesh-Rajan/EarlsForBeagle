import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blueblack text-white py-6">
      <div id="footer" className="flex flex-col md:flex-row items-center justify-center bg-blueblack text-gold-500 py-10 px-5 border-b border-gold space-y-8 md:space-y-0">
        <div className="flex-1 text-center md:border-r md:border-gold md:pr-5">
          <div className="mb-4 text-5xl font-title text-gold">Address</div>
          <div className="flex items-center justify-center space-x-2">
            <FaMapMarkerAlt className="text-3xl" />
            <div>
              <p className="text-base">Street: 3840 Winifred Way, Marion,</p>
              <p className="text-base">United States</p>
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:pl-5">
          <div className="mb-4 text-5xl font-title text-gold">Contact Us</div>
          <div className="flex items-center justify-center space-x-2">
            <FaPhoneAlt className="text-3xl" />
            <div>
              <p className="text-base">(123) 23456 788 123 4578 954</p>
              <p className="text-base">Open: 09:00 am - 01:00 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center py-4">
        <h1 className="text-7xl font-title text-gold">Earls</h1>
      </div>
      <div className="container mx-auto px-6 pt-4 text-center space-y-4">
        <nav className="flex flex-wrap justify-center space-x-4 text-gray-400 text-sm">
          <a href="#home" className="hover:text-white transition">
            HOME
          </a>
          <a href="#about" className="hover:text-white transition">
            ABOUT US
          </a>
          <a href="#blog" className="hover:text-white transition">
            BLOG
          </a>
          <a href="#portfolio" className="hover:text-white transition">
            PORTFOLIO
          </a>
          <a href="#gallery" className="hover:text-white transition">
            SHOP
          </a>
          <a href="#contact" className="hover:text-white transition">
            CONTACT
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
