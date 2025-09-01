import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { blogPosts } from '../data/mockData';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hizmetlerimiz ve Sektör Bilgileri</h2>
          <p className="text-xl text-gray-600">
            Hizmetlerimiz ve sektör ile ilgili çeşitli bilgileri burada bulabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-gray-400"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(post.date).toLocaleDateString('tr-TR')}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 group"
                >
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Neden Edolog Matbaa?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Kaliteli Hizmet</h4>
              <p className="text-gray-600 text-sm">En kaliteli malzemeler ve teknolojiler</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Uygun Fiyat</h4>
              <p className="text-gray-600 text-sm">Piyasanın en uygun fiyatları</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Hızlı Teslimat</h4>
              <p className="text-gray-600 text-sm">Zamanında ve güvenli teslimat</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Tasarım Desteği</h4>
              <p className="text-gray-600 text-sm">Ücretsiz profesyonel tasarım hizmeti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;