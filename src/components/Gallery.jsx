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
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
<h2 className="text-5xl font-bold mb-6">
  Gallery
</h2>

<p className="text-2xl text-gray-600">
  Celebrating the Journey of Mahua
</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                loading = "lazy"
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}