import products from "../data/products";

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Product Catalogue
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 cursor-pointer"
            >

              {/* Product Image */}
              <div className="h-80 flex items-center justify-center bg-white p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">

                <h3 className="text-xl font-bold mb-3">
                  {product.name}
                </h3>

                <p className="text-gray-500 mb-2">
                  Weight: {product.weight}
                </p>

                <p className="text-2xl font-bold text-orange-600">
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