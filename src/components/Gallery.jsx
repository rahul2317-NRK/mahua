export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    "https://images.unsplash.com/photo-1473773508845-188df298d2d1",
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Gallery
          </h2>

          <p className="text-gray-600 mt-4">
            A glimpse into the world of Mahua.
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