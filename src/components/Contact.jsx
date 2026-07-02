import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6B3F2A] mb-4">
            We're Here For You
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Everyday | 8am - 10pm
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:mahuadelights@gmail.com"
            className="
              bg-[#f8f0f0]
              rounded-3xl
              p-6 md:p-8
              shadow-md
              transition-all duration-300
              hover:shadow-2xl
              hover:-translate-y-2
              hover:scale-105
              active:scale-95
              touch-manipulation
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Email
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
              <FaEnvelope className="text-3xl" />

              <span className="text-sm md:text-lg break-all">
                mahuadelights@gmail.com
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917993635905"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#f8f0f0]
              rounded-3xl
              p-6 md:p-8
              shadow-md
              transition-all duration-300
              hover:shadow-2xl
              hover:-translate-y-2
              hover:scale-105
              active:scale-95
              touch-manipulation
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              WhatsApp Call
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              <FaWhatsapp className="text-3xl text-green-600" />

              <span className="text-lg md:text-xl">
                +91 79936 35905
              </span>
            </div>
          </a>

          {/* Social */}
          <div
            className="
              bg-[#f8f0f0]
              rounded-3xl
              p-6 md:p-8
              shadow-md
              transition-all duration-300
              hover:shadow-2xl
              hover:-translate-y-2
              hover:scale-105
              active:scale-95
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Social
            </h3>

            <div className="flex justify-center gap-4 md:gap-6">

              <a
                href="https://www.instagram.com/mahua_delights?igsh=MTB3MTdqOXYxMmVmaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 md:w-14 md:h-14
                  rounded-full bg-black text-white
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110
                  active:scale-90
                "
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/share/19Hg58Wo2u/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 md:w-14 md:h-14
                  rounded-full bg-black text-white
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110
                  active:scale-90
                "
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://wa.me/917993635905"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 md:w-14 md:h-14
                  rounded-full bg-black text-white
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110
                  active:scale-90
                "
              >
                <FaWhatsapp size={24} />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}