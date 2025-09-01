import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import ServicesSection from './ServicesSection';
import ClientsSection from './ClientsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;