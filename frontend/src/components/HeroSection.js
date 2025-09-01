import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU2Mjc5ODY1fDA&ixlib=rb-4.1.0&q=85",
      title: "UYGUN FİYAT",
      subtitle: "TASARIM DESTEĞİ",
      description: "KALİTELİ BASKI"
    },
    {
      image: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMGJ1c2luZXNzfGVufDB8fHx8MTc1NjI3OTg1OHww&ixlib=rb-4.1.0&q=85",
      title: "PROFESYONEL HİZMET",
      subtitle: "ORGANİZASYON DESTEĞİ",
      description: "ZAMANINDA TESLİMAT"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-100">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-200">
                    {slide.subtitle}
                  </h2>
                  <h3 className="text-2xl md:text-4xl font-medium mb-8 text-gray-300">
                    {slide.description}
                  </h3>
                  <p className="text-xl mb-16 text-gray-200">
                    Tüm işleriniz zamanında adresinize teslim.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      size="lg" 
                      className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg"
                    >
                      Teklif Al »
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      variant="outline" 
                      size="lg" 
                      className="border-gray-300 text-white hover:bg-gray-800 hover:text-white px-8 py-4 text-lg"
                    >
                      İletişim »
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Feature Icons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-12 text-white">
        <div className="flex flex-col items-center">
          <CheckCircle className="h-8 w-8 mb-2" />
          <span className="text-sm">Kalite</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="h-8 w-8 mb-2" />
          <span className="text-sm">Deneyim</span>
        </div>
        <div className="flex flex-col items-center">
          <Award className="h-8 w-8 mb-2" />
          <span className="text-sm">Güven</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;