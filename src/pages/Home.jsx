import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import OurTeam from "../components/OurTeam";
import BlogSection from "../components/BlogSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <OurTeam />
      <BlogSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default Home;
