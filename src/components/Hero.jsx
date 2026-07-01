export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh]">

      <img
        src="/images/hero/hero.jpg"
        alt="Mahua Products"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">

          <h1 className="text-6xl font-bold mb-6">
            Mahua Delights
          </h1>

          <p className="text-2xl">
            Pure • Natural • Traditional
          </p>

        </div>
      </div>

    </section>
  );
}