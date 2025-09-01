import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Lock, User, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock authentication - in real app, this would be an API call
    if (credentials.username === 'admin' && credentials.password === '23330125') {
      toast({
        title: "Giriş Başarılı",
        description: "Admin paneline yönlendiriliyorsunuz..."
      });
      
      // Mock token storage
      localStorage.setItem('adminToken', 'mock-admin-token');
      
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1000);
    } else {
      toast({
        title: "Giriş Hatası",
        description: "Kullanıcı adı veya şifre yanlış.",
        variant: "destructive"
      });
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="mb-6 border-gray-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Ana Sayfaya Dön
        </Button>

        <Card className="shadow-lg border-gray-200">
          <CardHeader className="space-y-1 bg-gray-800 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center flex items-center justify-center">
              <Lock className="h-6 w-6 mr-2" />
              Admin Panel Girişi
            </CardTitle>
            <p className="text-gray-300 text-center">EDOLOG MATBAA</p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Kullanıcı adınızı giriniz"
                    value={credentials.username}
                    onChange={handleInputChange}
                    className="pl-10 border-gray-300"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Şifrenizi giriniz"
                    value={credentials.password}
                    onChange={handleInputChange}
                    className="pl-10 border-gray-300"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-sm text-gray-600">
          Bu sayfa sadece yetkili personel içindir.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;