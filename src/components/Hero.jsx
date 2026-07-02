export default function Hero() {
  return (
    <section id="home" className="relative">

      <img
        src="/images/hero/hero.jpg.jpeg"
        alt="Mahua Products"
        className="w-full h-auto"
      />

     <div className="absolute inset-0 bg-black/45"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">

<h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
  Mahua Delights
</h1>

<p className="text-lg md:text-2xl text-amber-100 tracking-widest">
  PURE • NATURAL • TRADITIONAL
</p>

        </div>
      </div>

    </section>
  );
}