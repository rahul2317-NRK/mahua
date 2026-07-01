export default function Benefits() {
  const benefits = [
    {
      title: "Rich in Natural Goodness",
      description:
        "Mahua is valued for its traditional nutritional and wellness properties.",
      icon: "🌿",
    },
    {
      title: "Sustainably Sourced",
      description:
        "Collected responsibly while supporting local tribal communities.",
      icon: "🌱",
    },
    {
      title: "Traditional Heritage",
      description:
        "Rooted in generations of indigenous knowledge and practices.",
      icon: "🏺",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Benefits of Mahua
          </h2>

          <p className="text-gray-600 mt-4">
            Discover why Mahua has been cherished for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-amber-50 p-8 rounded-3xl shadow-md"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}