import React from 'react';
import { Card } from './ui/card';
import { clients } from '../data/mockData';

const ClientsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Çalıştığımız Bazı Firmalar</h2>
          <p className="text-xl text-gray-600">
            Güvenilir iş ortaklarımız ve memnun müşterilerimiz
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {clients.map((client) => (
            <Card 
              key={client.id} 
              className="p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 hover:border-gray-400"
            >
              <div className="text-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-20 object-cover rounded mb-3 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="font-semibold text-sm text-gray-800">{client.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <p className="text-gray-600">Aktif Müşteri</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
            <p className="text-gray-600">Memnuniyet Oranı</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-800 mb-2">10.000+</div>
            <p className="text-gray-600">Tamamlanan Proje</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <p className="text-gray-600">Destek Hizmeti</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-gray-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Müşteri Memnuniyeti Bizim Önceliğimiz</h3>
          <blockquote className="text-lg italic mb-4">
            "Edolog Matbaa ile çalışmak gerçekten keyifli. Hem kaliteli ürünler hem de zamanında teslimat. 
            Organizasyon hizmetleri de çok profesyonel."
          </blockquote>
          <p className="text-gray-300">- Ankara Belediyesi Etkinlik Koordinatörü</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;