import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Scrolling Strip */}
      <div className="bg-amber-500 text-white py-2 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Navbar Row */}
          <div className="relative flex items-center justify-center h-24">

            {/* Logo Left */}
            <div className="absolute left-0">
              <img
                src="/logo.jpeg"
                alt="Mahua Delights"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center gap-12 font-semibold tracking-wide text-lg">
              <li>
                <a href="#hero" className="nav-item hover:text-orange-600 transition-all duration-300">
                  HOME
                </a>
              </li>

              <li>
                <a href="#products" className="nav-item hover:text-orange-600 transition-all duration-300">
                  PRODUCTS
                </a>
              </li>

              <li>
                <a href="#about" className="nav-item hover:text-orange-600 transition-all duration-300">
                  ABOUT
                </a>
              </li>

              <li>
                <a href="#gallery" className="nav-item hover:text-orange-600 transition-all duration-300">
                  GALLERY
                </a>
              </li>

              <li>
                <a href="#contact" className="nav-item hover:text-orange-600 transition-all duration-300">
                  CONTACT
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="absolute right-0 md:hidden text-3xl text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>

          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-6">
              <ul className="flex flex-col items-center gap-5 font-semibold text-base">
                <li>
                  <a href="#hero" onClick={() => setIsOpen(false)}>
                    HOME
                  </a>
                </li>

                <li>
                  <a href="#products" onClick={() => setIsOpen(false)}>
                    PRODUCTS
                  </a>
                </li>

                <li>
                  <a href="#about" onClick={() => setIsOpen(false)}>
                    ABOUT
                  </a>
                </li>

                <li>
                  <a href="#gallery" onClick={() => setIsOpen(false)}>
                    GALLERY
                  </a>
                </li>

                <li>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          )}

        </div>
      </nav>
    </>
  );
}