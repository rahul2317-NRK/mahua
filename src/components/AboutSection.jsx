export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-[#f7f3e8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/images/about/about.jpeg"
              alt="Mahua Heritage"
              className="w-full max-h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-[#D97706] text-lg font-semibold tracking-wide mb-4">
              Our Heritage
            </p>

<h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5 text-gray-900">
  Rooted in Tradition, Crafted with Care
</h2>

            <div className="space-y-5">

              <p className="text-gray-700 text-lg leading-8">
                Mahua Delights celebrates the rich cultural
                heritage of tribal communities by bringing
                authentic Mahua products, traditional foods,
                organic ingredients, and handcrafted treasures
                to modern consumers.
              </p>

              <p className="text-gray-700 text-lg leading-8">
                Every product reflects generations of knowledge,
                sustainable practices, and a deep connection
                with nature. We believe in preserving heritage
                while creating opportunities for local artisans
                and communities.
              </p>

              <p className="text-gray-700 text-lg leading-8">
                Through Mahua Delights, we strive to share the
                natural goodness, cultural significance, and
                timeless traditions of Mahua with the world.
              </p>

            </div>

            {/* Optional Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-700">
                  100%
                </h3>
                <p className="text-gray-600 mt-2">
                  Natural
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-700">
                  Tribal
                </h3>
                <p className="text-gray-600 mt-2">
                  Sourced
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-green-700">
                  Pure
                </h3>
                <p className="text-gray-600 mt-2">
                  Quality
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}