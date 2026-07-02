export default function ProductCard({ product }) {
  return (
    <div
      className="
        bg-white rounded-3xl overflow-hidden
        shadow-lg
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
      <div className="h-72 md:h-80 flex items-center justify-center bg-white p-6">
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
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {product.name}
        </h3>

        <p className="text-gray-600 mb-6 leading-7 text-sm md:text-base">
          {product.description}
        </p>

        <button
          className="
            bg-orange-600 text-white
            px-5 py-3 rounded-xl
            transition-all duration-300
            hover:bg-orange-700
            hover:scale-105
            active:scale-95
          "
        >
          Know More
        </button>
      </div>
    </div>
  );
}