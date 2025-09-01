import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { services, categories } from '../data/mockData';
import { Filter } from 'lucide-react';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 12);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">HİZMETLERİMİZ</h2>
          <p className="text-xl text-gray-600 mb-8">
            Matbaa, Reklam ve Organizasyon alanında profesyonel hizmet
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center mb-4 text-gray-600">
            <Filter className="h-5 w-5 mr-2" />
            <span className="font-medium">Kategori Filtresi:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Category Description */}
        {activeCategory !== 'all' && (
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              {categories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {displayedServices.map((service) => (
            <Card 
              key={service.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-gray-400"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                  {categories.find(cat => cat.id === service.category)?.name || 'HİZMET'}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredServices.length > 12 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-100"
            >
              {showAll ? 'Daha Az Göster' : `Daha Fazla Göster (${filteredServices.length - 12} hizmet daha)`}
            </Button>
          </div>
        )}

        {/* Services Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">{services.length}+</div>
            <p className="text-gray-600">Farklı Hizmet</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">10+</div>
            <p className="text-gray-600">Yıl Deneyim</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
            <p className="text-gray-600">Mutlu Müşteri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;