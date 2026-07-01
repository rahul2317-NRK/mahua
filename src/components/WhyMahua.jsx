export default function WhyMahua() {
  const benefits = [
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Carefully sourced from nature without artificial additives."
    },
    {
      icon: "🌱",
      title: "Sustainably Harvested",
      description: "Supporting eco-friendly and responsible sourcing practices."
    },
    {
      icon: "🏺",
      title: "Tribal Heritage",
      description: "Inspired by generations of traditional tribal knowledge."
    },
    {
      icon: "💚",
      title: "Rich in Nutrients",
      description: "Valued for its nutritional and wellness benefits."
    }
  ];

  return (
    <section className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold">
            Why Choose Mahua?
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Nature's Gift, Preserved Authentically
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-3xl shadow-md text-center"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
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