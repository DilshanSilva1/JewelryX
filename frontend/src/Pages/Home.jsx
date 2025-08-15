import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoosUs from '../components/WhyChoosUs';
import AboutUs from '../components/AboutUs';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoosUs />
      <AboutUs />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
