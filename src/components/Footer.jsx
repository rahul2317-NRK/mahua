export default function Footer() {
  return (
    <footer className="bg-[#f8fcf8] pt-12 pb-4">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#edf7ed] rounded-[50px] border border-green-200 px-12 py-8 shadow-xl">

          <div className="grid md:grid-cols-4 gap-12">

            {/* Column 1 */}
            <div>
              <img
                src="/logo.png"
                alt="Mahua Delights"
                className="h-20 mb-8"
              />

              <p className="text-gray-800 leading-9 text-lg">
                Mahua Delights brings authentic Mahua products
                sourced from tribal communities and crafted
                with tradition, purity and care.
              </p>

              <h3 className="text-3xl font-bold mt-10 mb-6">
                Social Links
              </h3>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all duration-300"
                >
                  f
                </a>

                <a
                  href="#"
                  className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all duration-300"
                >
                  ig
                </a>

              </div>
            </div>

            {/* Column 2 */}
            <div>

              <h3 className="text-4xl font-bold mb-4">
                Useful Links
              </h3>

              <div className="h-[2px] w-full bg-green-600 mb-8"></div>

              <ul className="space-y-5 text-xl">
                <li>About Us</li>
                <li>Gallery</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>

            </div>

            {/* Column 3 */}
            <div>

              <h3 className="text-4xl font-bold mb-4">
                Contact Us
              </h3>

              <div className="h-[2px] w-full bg-green-600 mb-8"></div>

              <div className="space-y-5 text-lg leading-8">

                <p>Mahua Delights</p>

                <p>
                  Hyderabad,
                  Telangana,
                  India
                </p>

                <p>
                  +91 XXXXX XXXXX
                </p>

                <p>
                  info@mahuadelights.com
                </p>

              </div>

            </div>

            {/* Column 4 */}
            <div>

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Hyderabad&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] rounded-3xl"
              />

            </div>

          </div>

          {/* Copyright Section */}
          <div className="mt-10 pt-6 border-t border-green-300 text-center">
            <p className="text-gray-700">
              © 2026 Mahua Delights. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}