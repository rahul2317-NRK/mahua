import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyMahua from "../components/WhyMahua";
import Footer from "../components/Footer";
import Benefits from "../components/Benefits";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <WhyMahua />
      <Benefits />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
