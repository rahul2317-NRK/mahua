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
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#6B3F2A] mb-4">
            We're Here For You
          </h2>

          <p className="text-2xl text-gray-600">
            Everyday | 8am - 10pm
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:mahuadelights@gmail.com"
            className="bg-[#f8f0f0] rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-center mb-6">
              Email
            </h3>

            <div className="flex items-center justify-center gap-4">
              <FaEnvelope className="text-3xl" />
              <span className="text-xl">
                mahuadelights@gmail.com
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917993635905"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f8f0f0] rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-center mb-6">
              WhatsApp Call
            </h3>

            <div className="flex items-center justify-center gap-4">
              <FaWhatsapp className="text-3xl text-green-600" />
              <span className="text-xl">
                +91 79936 35905
              </span>
            </div>
          </a>

          {/* Social */}
          <div className="bg-[#f8f0f0] rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-3xl font-bold text-center mb-6">
              Social
            </h3>

            <div className="flex justify-center gap-6">

              <a
                href="https://www.instagram.com/mahua_delights?igsh=MTB3MTdqOXYxMmVmaQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/share/19Hg58Wo2u/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF size={24} />
              </a>

              <a
                href="https://wa.me/917993635905"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition"
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