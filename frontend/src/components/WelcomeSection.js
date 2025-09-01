import React from 'react';
import { Card } from './ui/card';
import { MessageCircle } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            EDOLOG MATBAA'YA HOŞGELDİNİZ !
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            EDOLOG MATBAA BİR PROFESYONEL MATBAA REKLAM VE ORGANİZASYON FİRMASIDIR.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Card className="p-6 bg-gray-800 text-white mb-8 hover:bg-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Tasarım - WhatsApp</h3>
                  <p className="text-green-400 text-xl font-bold">0536 496 43 18</p>
                </div>
              </div>
              <p className="text-gray-300">
                Tasarım, Sorularınız ve Fiyat almak için bizlere WhatsApp yolu ile ulaşabilirsiniz.
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Tüm Matbaa İşleriniz Adresinize Teslim</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-800 text-center">MATBAA</h4>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-800 text-center">TABELA</h4>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-800 text-center">DİJİTAL BASKI</h4>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-gray-400 transition-colors">
                  <h4 className="font-semibold text-gray-800 text-center">ORGANİZASYON</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzU2Mjc5ODY1fDA&ixlib=rb-4.1.0&q=85" 
              alt="Edolog Matbaa Ofis" 
              className="w-full rounded-lg shadow-lg"
            />
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Edolog Matbaa; profesyonel çalışma prensipleri ve markanıza değer katan size özgün tasarımları ile TAM MATBAA, REKLAM ve ORGANİZASYON hizmeti vermektedir.
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  Şirketimiz 2015 yılında kurulmuştur. Geniş bir hizmet ağına sahiptir.
                </p>
                <p>
                  Ağırlıklı olarak Tüm matbaa hizmeti veren firmamız dijital baskı, tabela ve organizasyon alanında hizmet vermektedir.
                </p>
                <p>
                  Amacımız hizmet verdiğimiz kurum ve firmalara ihtiyacı olan tüm reklam materyallerini ve organizasyon hizmetlerini en uygun fiyata, zamanında teslim etmektir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Banner */}
        <div className="mt-12 bg-gray-800 text-white rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Branda, folyo baskı, mat selefonlu kartvizit, satılık & kiralık afişleri, Roll-Up Banner, Yelken Bayrak işleriniz 1 günde teslim edilir.
          </h3>
          <p className="text-gray-300 text-lg">Edolog Matbaa Reklam & Organizasyon</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;