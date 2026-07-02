import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutSection from "../components/AboutSection";
import WhyMahua from "../components/WhyMahua";
import Benefits from "../components/Benefits";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <FeaturedProducts />

      <div data-aos="fade-right">
        <AboutSection />
      </div>

      <div data-aos="fade-up">
        <WhyMahua />
      </div>

      <div data-aos="fade-up">
        <Benefits />
      </div>

      <Gallery />

      <Contact />

      <WhatsAppButton />

      <Footer />
    </>
  );
}