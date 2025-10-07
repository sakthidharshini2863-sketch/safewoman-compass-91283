import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Star, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CitySearch } from '@/components/CitySearch';
import logo from '@/assets/safeshe-logo.png';

interface Stay {
  name: string;
  type: string;
  rating: number;
  address: string;
  safetyFeatures: string[];
  description: string;
  image: string;
  
}

const staysData: Record<string, Stay[]> = {
  'new york': [
    {
      name: 'The Jane Hotel - Women\'s Floor',
      type: 'Hotel',
      rating: 4.5,
      address: '113 Jane St, New York, NY 10014',
      safetyFeatures: ['24/7 Security', 'Women-Only Floor', 'CCTV Surveillance', 'Female Staff Available'],
      description: 'Historic boutique hotel with dedicated women-only floor and excellent safety measures.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      
    },
    {
      name: 'Sisters Hostel NYC',
      type: 'Hostel',
      rating: 4.7,
      address: '235 W 46th St, New York, NY 10036',
      safetyFeatures: ['Female-Only Dorms', 'Secure Lockers', '24/7 Reception', 'Safety Workshops'],
      description: 'Women-only hostel with a focus on safety and community building.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
      
    },
  ],
  'mumbai': [
    {
      name: 'The Taj Majestic - Ladies Wing',
      type: 'Hotel',
      rating: 4.8,
      address: 'Apollo Bunder, Mumbai 400001',
      safetyFeatures: ['24/7 Security', 'Women-Only Section', 'Female Concierge', 'Secure Parking'],
      description: 'Luxury hotel with dedicated ladies wing and premium safety features.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
     
    },
    {
      name: 'Women\'s Travelers Home',
      type: 'Hostel',
      rating: 4.6,
      address: 'Colaba, Mumbai 400005',
      safetyFeatures: ['Women-Only', 'Security Guard', 'CCTV', 'Female Manager'],
      description: 'Cozy hostel exclusively for women travelers with safety as priority.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
      
    },
  ],
  'london': [
    {
      name: 'The Montague on the Gardens',
      type: 'Hotel',
      rating: 4.7,
      address: '15 Montague St, London WC1B 5BJ',
      safetyFeatures: ['24/7 Security', 'Well-Lit Entrance', 'Safe Boxes', 'Female Staff'],
      description: 'Elegant hotel known for excellent safety measures and female-friendly environment.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      
    },
    {
      name: 'Women Only Hostel London',
      type: 'Hostel',
      rating: 4.5,
      address: 'Kings Cross, London N1C 4TB',
      safetyFeatures: ['Female-Only', 'Secure Entry', 'Lockers', 'Safety Training'],
      description: 'Modern hostel exclusively for women with comprehensive safety features.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    },
  ],
  'delhi': [
    {
      name: 'The Lalit - Women Travelers Section',
      type: 'Hotel',
      rating: 4.6,
      address: 'Barakhamba Avenue, New Delhi 110001',
      safetyFeatures: ['24/7 Security', 'Female Floor', 'Panic Buttons', 'Female Concierge'],
      description: 'Premium hotel with special accommodations for women travelers.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
      
    },
    {
      name: 'YWCA Women\'s Hostel',
      type: 'Hostel',
      rating: 4.4,
      address: 'Paharganj, New Delhi 110055',
      safetyFeatures: ['Women-Only', 'Security Guard', 'CCTV', 'Emergency Support'],
      description: 'Budget-friendly hostel with focus on women\'s safety and comfort.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
      
    },
  ],
  'paris': [
    {
      name: 'Hôtel Le Marais',
      type: 'Hotel',
      rating: 4.7,
      address: '3 Rue du Parc Royal, 75003 Paris',
      safetyFeatures: ['24/7 Security', 'Safe District', 'Female Staff', 'Secure Rooms'],
      description: 'Charming hotel in safe district with excellent safety measures.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      
    },
  ],
};

const FriendlyStays = () => {
  const navigate = useNavigate();
  const [searchedCity, setSearchedCity] = useState<string>('');
  const [stays, setStays] = useState<Stay[]>([]);

  const handleSearch = (city: string) => {
    const normalizedCity = city.toLowerCase();
    setSearchedCity(city);
    setStays(staysData[normalizedCity] || []);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="SafeShe Logo" className="h-12 w-auto" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SafeShe
            </h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Home className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Women-Friendly Stays
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover hotels and hostels rated as safe and welcoming for women travelers
          </p>
          <CitySearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      {searchedCity && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {stays.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Women-Friendly Stays in {searchedCity}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {stays.map((stay, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={stay.image} 
                          alt={stay.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Shield className="w-5 h-5 text-primary" />
                              {stay.name}
                            </CardTitle>
                            <CardDescription className="mt-2 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {stay.address}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{stay.type}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            <span className="font-semibold">{stay.rating}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{stay.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-600" />
                            Safety Features:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {stay.safetyFeatures.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Home className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-semibold mb-2">No Stays Found</h3>
                <p className="text-muted-foreground">
                  We don't have accommodation information for "{searchedCity}" yet. Try searching for New York, Mumbai, London, Delhi, or Paris.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default FriendlyStays;
