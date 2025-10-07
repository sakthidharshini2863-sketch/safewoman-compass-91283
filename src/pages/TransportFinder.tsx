import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Car, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CitySearch } from '@/components/CitySearch';
import logo from '@/assets/safeshe-logo.png';

interface TransportService {
  name: string;
  type: string;
  phone?: string;
  description: string;
  available: boolean;
}

const transportData: Record<string, TransportService[]> = {
  'new york': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service with safety features', available: true },
    { name: 'Lyft', type: 'Ride-sharing', description: 'Ride-sharing with women-friendly features', available: true },
    { name: "Women's Taxi NYC", type: 'Women-Only', phone: '212-777-7777', description: 'Taxi service operated by women for women', available: true },
    { name: 'Curb', type: 'Taxi App', description: 'Official NYC taxi app', available: true },
  ],
  'mumbai': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service with safety features', available: true },
    { name: 'Ola', type: 'Ride-sharing', description: 'Indian ride-sharing with SOS button', available: true },
    { name: 'WomenCab Mumbai', type: 'Women-Only', phone: '022-2345-6789', description: 'Cab service by women drivers', available: true },
    { name: 'Meru Cabs', type: 'Radio Taxi', phone: '44224422', description: 'Trusted radio taxi service', available: true },
  ],
  'london': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service with safety features', available: true },
    { name: 'Bolt', type: 'Ride-sharing', description: 'European ride-sharing service', available: true },
    { name: 'Black Cabs', type: 'Licensed Taxi', description: 'Traditional London black cabs', available: true },
    { name: 'Gett', type: 'Taxi App', description: 'Licensed taxi booking service', available: true },
  ],
  'delhi': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service with safety features', available: true },
    { name: 'Ola', type: 'Ride-sharing', description: 'Indian ride-sharing with SOS button', available: true },
    { name: 'Pink Cabs Delhi', type: 'Women-Only', phone: '011-4567-8900', description: 'Women-only cab service', available: true },
    { name: 'Meru Cabs', type: 'Radio Taxi', phone: '44224422', description: 'Trusted radio taxi service', available: true },
  ],
  'bengaluru': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Ola', type: 'Ride-sharing', description: 'Indian ride-sharing with SOS', available: true },
    { name: 'Women Cab Bangalore', type: 'Women-Only', phone: '080-1234-5678', description: 'Women-driven cabs', available: true },
  ],
  'paris': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Bolt', type: 'Ride-sharing', description: 'European ride-sharing', available: true },
    { name: 'G7 Taxi', type: 'Licensed Taxi', phone: '3607', description: 'Official Paris taxi service', available: true },
  ],
  'singapore': [
    { name: 'Grab', type: 'Ride-sharing', description: 'Southeast Asia’s leading ride-hailing app', available: true },
    { name: 'TADA', type: 'Ride-sharing', description: 'Commission-free ride-hailing service', available: true },
    { name: 'ComfortDelGro', type: 'Licensed Taxi', phone: '65521111', description: 'Largest taxi operator in Singapore', available: true },
  ]
  'dubai': [
    { name: 'Careem', type: 'Ride-sharing', description: 'Middle East ride-hailing app (owned by Uber)', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Dubai Taxi', type: 'Licensed Taxi', phone: '80088088', description: 'Government-run taxi service', available: true },
  ],
  'coimbatore': [
    { name: 'Ola', type: 'Ride-sharing', description: 'India’s leading ride-hailing service', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Red Taxi', type: 'Licensed Taxi', phone: '0422-4567890', description: 'Local Coimbatore taxi service', available: true },
  ],
  'chennai': [
    { name: 'Ola', type: 'Ride-sharing', description: 'India’s leading ride-hailing service', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Fast Track', type: 'Licensed Taxi', phone: '044-28889999', description: 'One of Chennai’s biggest cab networks', available: true },
  ],
  'bengaluru': [
    { name: 'Ola', type: 'Ride-sharing', description: 'India’s leading ride-hailing service', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Namma Yatri', type: 'Auto-rickshaw App', description: 'Auto-rickshaw aggregator in partnership with local drivers', available: true },
  ],
  'hyderabad': [
    { name: 'Ola', type: 'Ride-sharing', description: 'India’s leading ride-hailing service', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-sharing service', available: true },
    { name: 'Meru Cabs', type: 'Licensed Taxi', description: 'Reliable taxi service with pre-booking options', available: true },
  ],
  'moscow': [
    { name: 'Yandex Go', type: 'Ride-sharing', description: 'Russia’s leading ride-hailing app (formerly Yandex.Taxi)', available: true },
    { name: 'Citymobil', type: 'Ride-sharing', description: 'Affordable rides across Moscow', available: true },
    { name: 'Maxim', type: 'Ride-sharing', description: 'Wide presence across Russian cities', available: true },
  ],
  'bangkok': [
    { name: 'Grab', type: 'Ride-sharing', description: 'Popular across Southeast Asia including Thailand', available: true },
    { name: 'Bolt', type: 'Ride-sharing', description: 'Growing presence in Bangkok', available: true },
    { name: 'All Thai Taxi', type: 'Licensed Taxi', phone: '1624', description: 'Modern taxi services by Nakhonchai Air', available: true },
  ],
  'rome': [
    { name: 'FREE NOW', type: 'Ride-sharing', description: 'Taxi and ride-hailing app in Italy', available: true },
    { name: 'ItTaxi', type: 'Licensed Taxi', phone: '06 3570', description: 'Official Roman taxi-hailing app', available: true },
    { name: 'Uber', type: 'Ride-sharing', description: 'Available in Rome for Uber Black', available: true },
  ],
  'hong_kong': [
    { name: 'Uber', type: 'Ride-sharing', description: 'Global ride-hailing service available in Hong Kong', available: true },
    { name: 'HKTaxi', type: 'Licensed Taxi', description: 'Popular local taxi-hailing app for red, green, and blue taxis', available: true },
    { name: 'GO Taxi', type: 'Licensed Taxi', description: 'Another reliable local taxi app in Hong Kong', available: true },
  ],
  'seoul': [
    { name: 'Kakao T', type: 'Ride-sharing', description: 'Most widely used taxi and ride-hailing app in South Korea', available: true },
    { name: 'Tada', type: 'Ride-sharing', description: 'Premium van-hailing service, app-based in Seoul', available: true },
    { name: 'International Taxi', type: 'Licensed Taxi', phone: '1644-2255', description: 'English-speaking taxi service for international visitors', available: true },
  ],
  'bali': [
    { name: 'Gojek', type: 'Ride-sharing', description: 'Indonesia-based ride-hailing and delivery super app', available: true },
    { name: 'Grab', type: 'Ride-sharing', description: 'Southeast Asia’s leading ride-hailing app, active in Bali', available: true },
    { name: 'Blue Bird', type: 'Licensed Taxi', phone: '+62 361 701111', description: 'Trusted traditional taxi service in Bali and other cities', available: true },
  ]
};

const TransportFinder = () => {
  const navigate = useNavigate();
  const [searchedCity, setSearchedCity] = useState<string>('');
  const [services, setServices] = useState<TransportService[]>([]);

  const handleSearch = (city: string) => {
    const normalizedCity = city.toLowerCase();
    setSearchedCity(city);
    setServices(transportData[normalizedCity] || []);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <img src={logo} alt="SafeShe Logo" className="h-10 w-auto" />
          <div className="w-[100px]"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Car className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Transport Finder
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find verified ride apps and women-friendly cab services in your city
          </p>
          <CitySearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Results Section */}
      {searchedCity && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {services.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Transport Services in {searchedCity}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Car className="w-5 h-5 text-primary" />
                              {service.name}
                            </CardTitle>
                            <CardDescription className="mt-2">{service.type}</CardDescription>
                          </div>
                          {service.available && (
                            <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                              Available
                            </span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        {service.phone && (
                          <div className="flex items-center gap-2 text-primary">
                            <Phone className="w-4 h-4" />
                            <a href={`tel:${service.phone}`} className="hover:underline">
                              {service.phone}
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-semibold mb-2">No Services Found</h3>
                <p className="text-muted-foreground">
                  We don't have transport information for "{searchedCity}" yet. Try searching for New York, Mumbai, London, Delhi, or Paris.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default TransportFinder;
