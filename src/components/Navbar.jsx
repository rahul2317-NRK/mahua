export default function Navbar() {
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

            {/* Duplicate for infinite effect */}
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
            <span>Mahua Delights • Pure & Natural • </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 relative flex items-center">

          {/* Logo Left */}
          <div className="absolute left-6">
            <img
              src="/logo.png"
              alt="Mahua Delights"
              className="h-16 w-auto"
            />
          </div>

          {/* Center Menu */}
          <ul className="w-full flex justify-center gap-12 font-semibold text-lg">
            <li>
              <a href="#hero" className="hover:text-orange-600 hover:scale-105 transition-all duration-300">
                HOME
              </a>
            </li>

            <li>
              <a href="#featuredproducts" className="hover:text-orange-600 hover:scale-105 transition-all duration-300">
                PRODUCTS
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-orange-600 hover:scale-105 transition-all duration-300">
                ABOUT
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-orange-600 hover:scale-105 transition-all duration-300">
                GALLERY
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-orange-600 hover:scale-105 transition-all duration-300">
                CONTACT
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}