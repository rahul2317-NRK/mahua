export default function Contact() {
  return (
    <section id ="contact" className="py-24 bg-orange-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-gray-600 mb-12">
          We'd love to hear from you. Reach out for product inquiries,
          partnerships, or more information about Mahua Delights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

         <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p>info@mahuadelights.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="font-bold text-xl mb-2">Address</h3>
            <p>Hyderabad, Telangana, India</p>
          </div>

        </div>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-12 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
        >
          WhatsApp Us
        </a>

      </div>
    </section>
  );
}