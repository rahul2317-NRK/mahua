import products from "../data/products";

export default function FeaturedProducts() {
  return (
    <section id="featuredproducts" className="py-24 bg-gray-50">
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
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

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