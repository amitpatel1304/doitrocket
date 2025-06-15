import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AOSInitializer from "./components/AOSInitializer";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogSection from "./components/BlogSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import FloatingActions from "./components/CTAButton";

function App() {
  return (
    <>
    <AOSInitializer />
      <Header />
      <HeroSection/>
      <AboutSection/>
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactUsSection/>
      <Footer/>
      <FloatingActions/>
    </>
  );
}

export default App;
