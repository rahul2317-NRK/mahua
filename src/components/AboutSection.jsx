export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
            alt="Mahua Heritage"
            className="rounded-3xl shadow-lg"
          />
        </div>

        <div>
          <span className="text-orange-600 font-semibold">
            Our Heritage
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Rooted in Tradition,
            Crafted with Care
          </h2>

          <p className="text-gray-700 leading-8">
            Mahua Delights celebrates the rich cultural heritage of tribal
            communities by bringing authentic Mahua products, traditional
            foods, organic ingredients, and handcrafted treasures to modern
            consumers.
          </p>

          <p className="text-gray-700 leading-8 mt-4">
            Every product reflects generations of knowledge, sustainable
            practices, and a deep connection with nature.
          </p>
        </div>

      </div>
    </section>
  );
}