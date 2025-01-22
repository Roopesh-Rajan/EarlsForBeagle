import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate text-white  top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        <h1 className="text-5xl font-title ml-14 text-gold">Earls</h1>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 md:static absolute top-16 left-0 w-full md:w-auto bg-[#ded6d6] md:bg-transparent md:shadow-none shadow-lg z-50 transition-all ease-in-out duration-300`}
        >
          <a href="#home" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Page
          </a>
          <a href="#blog" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Blog
          </a>
          <a href="#portfolio" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Portfolio
          </a>
          <a href="#gallery" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Shop
          </a>
          <a href="#contact" className="text-white hover:text-gold px-4 py-2 md:px-0">
            Contact
          </a>
        </nav>
        <a href="#contact">
        <button className="hidden md:inline-block mr-14 bg-slate-500 border border-gold text-white px-6 py-3 hover:bg-[#d9973b] transition">
          Book a Table
        </button></a>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-label="Close menu" />
          ) : (
            <Menu className="h-6 w-6" aria-label="Open menu" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;