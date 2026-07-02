import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f8fcf8] pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div
          data-aos="fade-up"
          className="bg-[#edf7ed] rounded-[30px] md:rounded-[50px] border border-green-200 px-6 md:px-12 py-10 shadow-xl"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1 */}
            <div data-aos="fade-up" data-aos-delay="100">
              <img
                src="/logo.jpeg"
                alt="Mahua Delights"
                className="h-16 md:h-20 mb-6"
              />

              <p className="footer-text text-gray-800 leading-8 text-base md:text-lg">
                Mahua Delights brings authentic Mahua products
                sourced from tribal communities and crafted
                with tradition, purity, and care.
              </p>

              <h3 className="footer-heading text-2xl md:text-3xl font-bold mt-8 mb-5">
                Social Links
              </h3>

              <div className="flex gap-4">

                <a
                  href="https://www.facebook.com/share/19Hg58Wo2u/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="
                    w-12 h-12
                    bg-green-600 text-white rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    hover:bg-green-700 hover:scale-110
                  "
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="https://www.instagram.com/mahua_delights?igsh=MTB3MTdqOXYxMmVmaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="
                    w-12 h-12
                    bg-green-600 text-white rounded-lg
                    flex items-center justify-center
                    transition-all duration-300
                    hover:bg-green-700 hover:scale-110
                  "
                >
                  <FaInstagram size={20} />
                </a>

              </div>
            </div>

            {/* Column 2 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="footer-heading text-2xl md:text-3xl font-bold mb-4">
                Useful Links
              </h3>

              <div className="h-[2px] w-full bg-green-600 mb-6"></div>

              <ul className="footer-text space-y-4 text-lg">
                <li><a href="#home" className="hover:text-green-600 transition-all duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-green-600 transition-all duration-300">About Us</a></li>
                <li><a href="#products" className="hover:text-green-600 transition-all duration-300">Products</a></li>
                <li><a href="#gallery" className="hover:text-green-600 transition-all duration-300">Gallery</a></li>
                <li><a href="#contact" className="hover:text-green-600 transition-all duration-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="footer-heading text-2xl md:text-3xl font-bold mb-4">
                Contact Us
              </h3>

              <div className="h-[2px] w-full bg-green-600 mb-6"></div>

              <div className="footer-text space-y-4 text-base md:text-lg leading-8">
                <p>Mahua Delights</p>

                <p>
                  Utnoor,<br />
                  Telangana 504311,<br />
                  India
                </p>

                <p>+91 79936 35905</p>

                <p>mahuadelights@gmail.com</p>
              </div>
            </div>

            {/* Column 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <iframe
                title="Utnoor Map"
                src="https://maps.google.com/maps?q=Utnoor,Telangana,504311&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="
                  w-full
                  h-[220px] md:h-[300px]
                  rounded-3xl
                  shadow-lg
                "
                loading="lazy"
              />
            </div>

          </div>

          {/* Copyright */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-10 pt-6 border-t border-green-300 text-center"
          >
            <p className="footer-text text-sm md:text-base text-gray-700">
              © 2026 Mahua Delights. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}