import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EDOLOG MATBAA</h3>
            <p className="text-gray-300 mb-4">
              Profesyonel matbaa, reklam ve organizasyon hizmetleri. 
              Kaliteli hizmet anlayışıyla yanınızdayız.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/edologmatbaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/edologmatbaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-pink-600 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/edologmatbaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-500 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/edologmatbaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-700 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@edologmatbaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 text-gray-400 hover:text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Matbaa Hizmetleri</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Tabela & Işıklı Tabela</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Dijital Baskı</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Bayrak & Flama</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Organizasyon Malzemeleri</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Etkinlik Yönetimi</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Kartvizit & Katalog</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Broşür & Poster</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Sertifika & Diploma</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Branda & Folyo</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Fuar Standları</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Roll-Up Banner</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300">0536 496 43 18</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href="mailto:info@edologmatbaa.com" className="text-gray-300 hover:text-white transition-colors">
                  info@edologmatbaa.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Büyükesat Mahallesi Küpe Sokak No:13/1<br />
                  Çankaya / ANKARA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2025 Edolog Matbaa. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/admin" className="text-gray-400 hover:text-white text-sm transition-colors">
                Admin Panel
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;