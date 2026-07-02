import products from "../data/products";

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Product Catalogue
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-white rounded-2xl overflow-hidden
                shadow-md
                transition-all duration-300
                hover:shadow-2xl
                hover:-translate-y-2
                hover:scale-[1.02]
                active:scale-95
                cursor-pointer
                touch-manipulation
              "
            >
              {/* Product Image */}
              <div className="h-72 md:h-80 flex items-center justify-center bg-white p-4 md:p-6">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    max-h-full max-w-full object-contain
                    transition-transform duration-500
                    hover:scale-105
                    active:scale-95
                  "
                />

              </div>

              {/* Product Details */}
              <div className="p-5 md:p-6">

                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-500 mb-2 text-sm md:text-base">
                  Weight: {product.weight}
                </p>

                <p className="text-xl md:text-2xl font-bold text-orange-600">
                  ₹{product.price}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}