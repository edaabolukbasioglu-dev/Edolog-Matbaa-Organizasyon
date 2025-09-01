import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen zorunlu alanları doldurunuz.",
        variant: "destructive"
      });
      return;
    }

    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Teklif Talebiniz Alındı",
      description: "En kısa sürede size dönüş yapacağız. Teşekkürler!"
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">İletişim</h2>
          <p className="text-xl text-gray-600 mb-8">
            İhtiyacınız olan matbaa ya da diğer reklam işleriniz için hemen teklif alabilirsiniz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Teklif Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Adı Soyadı *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="company">Firma Adı</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">E-posta Adresi *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Adres</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="message">Mesajınız *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-gray-300"
                  placeholder="İhtiyacınız olan hizmet hakkında detayları belirtiniz..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                Teklif Gönder
              </Button>
            </form>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              Fiyat Teklifi almak için lütfen formu eksiksiz doldurunuz. 
              İlgili personelimiz size en kısa sürede dönüş yapacaktır.
            </p>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* WhatsApp Contact */}
            <Card className="p-6 bg-green-600 text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">TASARIM - WHATSAPP</h3>
                  <p className="text-2xl font-bold">0536 496 43 18</p>
                </div>
              </div>
              <p className="mb-4">
                Tasarım, Sorularınız ve Fiyat almak için bizlere WhatsApp yolu ile ulaşabilirsiniz.
              </p>
              <Button 
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/905364964318', '_blank')}
              >
                WhatsApp ile İletişim
              </Button>
            </Card>

            {/* Office Locations */}
            <div className="space-y-4">
              {/* Main Office */}
              <Card className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  MERKEZ OFİS
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>0536 496 43 18</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Büyükesat Mahallesi Küpe Sokak No:13/1 Çankaya / ANKARA</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:info@edologmatbaa.com" className="text-blue-600 hover:underline">
                      info@edologmatbaa.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  ÇALIŞMA SAATLERİMİZ
                </h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>PAZARTESİ - CUMA:</strong> 09:00 - 18:00</p>
                  <p><strong>CUMARTESİ:</strong> 10:00 - 14:00</p>
                  <p><strong>PAZAR VE RESMİ TATİLLER:</strong> KAPALI</p>
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">SOSYAL MEDYA</h4>
                <p className="text-gray-600 mb-4">Bizi sosyal medya hesaplarımızdan takip edin!</p>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all"
                    onClick={() => window.open('https://facebook.com/edologmatbaa', '_blank')}
                  >
                    <Facebook className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-xs text-gray-600">Facebook</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-pink-200 hover:bg-pink-50 hover:border-pink-400 transition-all"
                    onClick={() => window.open('https://instagram.com/edologmatbaa', '_blank')}
                  >
                    <Instagram className="h-6 w-6 text-pink-600 mb-2" />
                    <span className="text-xs text-gray-600">Instagram</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all"
                    onClick={() => window.open('https://twitter.com/edologmatbaa', '_blank')}
                  >
                    <Twitter className="h-6 w-6 text-blue-500 mb-2" />
                    <span className="text-xs text-gray-600">Twitter</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-blue-200 hover:bg-blue-50 hover:border-blue-600 transition-all"
                    onClick={() => window.open('https://linkedin.com/company/edologmatbaa', '_blank')}
                  >
                    <Linkedin className="h-6 w-6 text-blue-700 mb-2" />
                    <span className="text-xs text-gray-600">LinkedIn</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-red-200 hover:bg-red-50 hover:border-red-400 transition-all"
                    onClick={() => window.open('https://youtube.com/@edologmatbaa', '_blank')}
                  >
                    <Youtube className="h-6 w-6 text-red-600 mb-2" />
                    <span className="text-xs text-gray-600">YouTube</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex flex-col items-center p-4 h-auto border-green-200 hover:bg-green-50 hover:border-green-400 transition-all"
                    onClick={() => window.open('https://wa.me/905364964318', '_blank')}
                  >
                    <MessageCircle className="h-6 w-6 text-green-600 mb-2" />
                    <span className="text-xs text-gray-600">WhatsApp</span>
                  </Button>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    📢 Güncel kampanyalar ve projelerimiz için takipte kalın!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;