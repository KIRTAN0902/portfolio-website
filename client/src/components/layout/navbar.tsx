import { useState } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-[#f5f5dc] border-b-4 border-black z-50 py-4">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="font-pixel text-lg md:text-xl">
            KIRTAN.S
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <a href="#about" className="pixel-nav-item">
              ABOUT
            </a>
            <a href="#services" className="pixel-nav-item">
              SERVICES
            </a>
            <a href="#portfolio" className="pixel-nav-item">
              PORTFOLIO
            </a>
            <a href="#contact" className="pixel-nav-item">
              CONTACT
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu bg-[#f5f5dc] border-b-4 border-black ${isMenuOpen ? 'open' : ''}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="font-pixel text-sm" onClick={closeMenu}>
              ABOUT
            </a>
            <a href="#services" className="font-pixel text-sm" onClick={closeMenu}>
              SERVICES
            </a>
            <a href="#portfolio" className="font-pixel text-sm" onClick={closeMenu}>
              PORTFOLIO
            </a>
            <a href="#contact" className="font-pixel text-sm" onClick={closeMenu}>
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
