import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>0536 496 43 18</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@edologmatbaa.com</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <span>Pazartesi - Cuma: 09:00 - 18:00</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="Edolog Matbaa Logo" className="h-20 w-auto" />
            <h1 className="text-2xl font-bold text-gray-800">EDOLOG MATBAA & ORGANİZASYON</h1>
          </div>


          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Hizmetlerimiz
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              İletişim
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-800 hover:bg-gray-900 text-white"
            >
              Teklif Al
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Hizmetlerimiz
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Hakkımızda
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                İletişim
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-800 hover:bg-gray-900 text-white w-fit"
              >
                Teklif Al
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;