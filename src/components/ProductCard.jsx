export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-5">
          {product.description}
        </p>

        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">
          Know More
        </button>
      </div>

    </div>
  );
}