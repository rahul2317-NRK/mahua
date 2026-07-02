export default function Gallery() {
  const images = [
    "/images/Gallery/image1.jpeg",
    "/images/Gallery/image2.jpeg",
    "/images/Gallery/image3.jpeg",
    "/images/Gallery/image4.jpeg",
    "/images/Gallery/image5.jpeg",
    "/images/Gallery/image6.jpeg",
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Gallery
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Celebrating the Journey of Mahua
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                shadow-lg
                transition-all
                duration-300
                hover:shadow-2xl
                hover:-translate-y-2
                active:scale-95
                cursor-pointer
                touch-manipulation
              "
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="
                  w-full
                  h-72
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                  active:scale-95
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}