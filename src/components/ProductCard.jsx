export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">

      {/* Product Image */}
<div className="bg-red-500 p-10">
  <img
    src={product.image}
    alt={product.name}
    className="w-32"
  />
</div>

      {/* Product Details */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-3">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-6 leading-7">
          {product.description}
        </p>

        <button className="bg-orange-600 text-white px-5 py-3 rounded-xl hover:bg-orange-700 transition-all duration-300">
          Know More
        </button>

      </div>

    </div>
  );
}