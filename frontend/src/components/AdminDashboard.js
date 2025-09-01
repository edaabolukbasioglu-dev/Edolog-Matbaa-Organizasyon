import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { 
  LogOut, 
  Home, 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  FileText, 
  Settings,
  BarChart3,
  Package
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    category: 'matbaa',
    image: ''
  });

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  // Mock services data
  useEffect(() => {
    // In a real app, this would fetch from API
    setServices([
      { id: 1, title: 'Kartvizit', category: 'matbaa', status: 'active' },
      { id: 2, title: 'Katalog', category: 'matbaa', status: 'active' },
      { id: 3, title: 'Germe Tabela', category: 'tabela', status: 'active' }
    ]);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast({
      title: "Çıkış Yapıldı",
      description: "Güvenli bir şekilde çıkış yapıldı."
    });
    navigate('/admin');
  };

  const handleAddService = (e) => {
    e.preventDefault();
    
    const service = {
      id: Date.now(),
      ...newService,
      status: 'active'
    };
    
    setServices([...services, service]);
    setNewService({ title: '', description: '', category: 'matbaa', image: '' });
    
    toast({
      title: "Hizmet Eklendi",
      description: "Yeni hizmet başarıyla eklendi."
    });
    
    setActiveTab('services');
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
    toast({
      title: "Hizmet Silindi",
      description: "Hizmet başarıyla silindi."
    });
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'services', label: 'Hizmetler', icon: Package },
    { id: 'add-service', label: 'Hizmet Ekle', icon: Plus },
    { id: 'customers', label: 'Müşteriler', icon: Users },
    { id: 'orders', label: 'Siparişler', icon: FileText },
    { id: 'settings', label: 'Ayarlar', icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Toplam Hizmet</p>
                      <p className="text-2xl font-bold text-gray-800">{services.length}</p>
                    </div>
                    <Package className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Aktif Müşteri</p>
                      <p className="text-2xl font-bold text-gray-800">156</p>
                    </div>
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Bekleyen Sipariş</p>
                      <p className="text-2xl font-bold text-gray-800">23</p>
                    </div>
                    <FileText className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Bu Ay Gelir</p>
                      <p className="text-2xl font-bold text-gray-800">₺45.2K</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Hizmetler</h2>
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">ID</th>
                        <th className="text-left p-2">Hizmet Adı</th>
                        <th className="text-left p-2">Kategori</th>
                        <th className="text-left p-2">Durum</th>
                        <th className="text-left p-2">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service) => (
                        <tr key={service.id} className="border-b">
                          <td className="p-2">{service.id}</td>
                          <td className="p-2">{service.title}</td>
                          <td className="p-2 capitalize">{service.category}</td>
                          <td className="p-2">
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              {service.status}
                            </span>
                          </td>
                          <td className="p-2">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleDeleteService(service.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'add-service':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Hizmet Ekle</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleAddService} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Hizmet Adı</Label>
                    <Input
                      id="title"
                      value={newService.title}
                      onChange={(e) => setNewService({...newService, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Kategori</Label>
                    <select
                      id="category"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={newService.category}
                      onChange={(e) => setNewService({...newService, category: e.target.value})}
                    >
                      <option value="matbaa">Matbaa</option>
                      <option value="tabela">Tabela</option>
                      <option value="dijital">Dijital Baskı</option>
                      <option value="bayrak">Bayrak</option>
                      <option value="organizasyon">Organizasyon</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="image">Görsel URL</Label>
                    <Input
                      id="image"
                      value={newService.image}
                      onChange={(e) => setNewService({...newService, image: e.target.value})}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Açıklama</Label>
                    <Textarea
                      id="description"
                      rows="4"
                      value={newService.description}
                      onChange={(e) => setNewService({...newService, description: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-gray-800 hover:bg-gray-700">
                    Hizmet Ekle
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600">Bu bölüm henüz geliştirme aşamasındadır.</p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-6">
          <h1 className="text-xl font-bold">EDOLOG MATBAA</h1>
          <p className="text-gray-400 text-sm">Admin Panel</p>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-700 transition-colors ${
                  activeTab === item.id ? 'bg-gray-700 border-r-2 border-white' : ''
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-700">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="w-full mb-2 border-gray-600 text-white hover:bg-gray-700"
          >
            <Home className="h-4 w-4 mr-2" />
            Ana Sayfa
          </Button>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full border-gray-600 text-white hover:bg-gray-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Çıkış Yap
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;