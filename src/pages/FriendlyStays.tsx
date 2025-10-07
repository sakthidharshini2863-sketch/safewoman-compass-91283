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
  website?: string;
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
      website:'https://www.makemytrip.com/hotels/hotel-details/?hotelId=4219023832548079&_uCurrency=INR&city=CTNEWY&cmp=SEM%7CD%7CIH%7CG%7CHname%7CIH_Hname_TROAS_CAT_C_New+York%7C4219023832548079%7CRSA%7CRegular&country=USA&gad_campaignid=20333195888&gad_source=1&gbraid=0AAAAAD5Az1TlhhL_D6Svtg2dI3tsO7oQi&gclid=Cj0KCQjw9JLHBhC-ARIsAK4PhcoPx-vUMqjqHVLnMkwKlcCZRQee3O5Afr8aH4asRO20vzm1nzT4wdUaAiNNEALw_wcB&lat=40.73818&lng=-74.00969&locusId=CTNEWY&locusType=city&rank=1&reference=hotel&roomStayQualifier=2e0e&searchText=New+York&topHtlId=4219023832548079&type=city&mtkeys=undefined&isPropSearch=T'
    },
    {
      name: 'Sisters Hostel NYC',
      type: 'Hostel',
      rating: 4.7,
      address: '235 W 46th St, New York, NY 10036',
      safetyFeatures: ['Female-Only Dorms', 'Secure Lockers', '24/7 Reception', 'Safety Workshops'],
      description: 'Women-only hostel with a focus on safety and community building.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
      website:'https://sister-city-new-york.hotels-innewyork.com/en/'
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
      website:'https://www.tajhotels.com/en-in/offers/festivals-of-india-offer?gad_source=1&gad_campaignid=21901686463&gbraid=0AAAAADhl-_8uR6XeZt-6VT2vvK0OG9A8B&gclid=Cj0KCQjw9JLHBhC-ARIsAK4PhcqrBhuM1lDwMXXOsKd63yOQARdCSTFhOJsJZ35WMKI1FjjUO_FKtoAaAmc0EALw_wcB'
    },
    {
      name: 'Women\'s Travelers Home',
      type: 'Hostel',
      rating: 4.6,
      address: 'Colaba, Mumbai 400005',
      safetyFeatures: ['Women-Only', 'Security Guard', 'CCTV', 'Female Manager'],
      description: 'Cozy hostel exclusively for women travelers with safety as priority.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
      website:'https://www.hostelz.com/hostels/India/Mumbai/female-only-hostels'
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
      website:'https://montaguehotel.com/'
    },
    {
      name: 'Women Only Hostel London',
      type: 'Hostel',
      rating: 4.5,
      address: 'Kings Cross, London N1C 4TB',
      safetyFeatures: ['Female-Only', 'Secure Entry', 'Lockers', 'Safety Training'],
      description: 'Modern hostel exclusively for women with comprehensive safety features.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
      website:'https://www.hostelworld.com/hostels/p/316723/hostelle-women-only-hostel-london/?source=ppc_gooads_nonbrand_dsk_dsa_pn_en_uk&network=g&campaign_id=20966974016&adgroup_id=158065486037&criteria_id=dsa-443313842330&creative_id=688684467093&location_physical_id=1007810&location_interest_id=1006886&adposition=&uniqueclickID=10105109688575261357&sub_keyword=&sub_ad=&sub_publisher=ADW&gclsrc=aw.ds&gad_source=1&gad_campaignid=20966974016&gbraid=0AAAAAD9QXQYecYFp4KQ61iIO4w28rJI1U&gclid=Cj0KCQjw9JLHBhC-ARIsAK4PhcqxFuW-LW09kFrbBR1ruuX56UDLOZKuLRPbt_MEtX00yy2sxoUvDpwaAhEaEALw_wcB'
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
      website:'https://www.thelalit.com/the-lalit-delhi/?srsltid=AfmBOorqoz5aSDMp_F3461o9l5wmH4CgxTLeStTpe-hka4quW8iSU7YO'
    },
    {
      name: 'YWCA Women\'s Hostel',
      type: 'Hostel',
      rating: 4.4,
      address: 'Paharganj, New Delhi 110055',
      safetyFeatures: ['Women-Only', 'Security Guard', 'CCTV', 'Emergency Support'],
      description: 'Budget-friendly hostel with focus on women\'s safety and comfort.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
      website:'https://www.ywcaofdelhi.org/chww.html'
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
      website:'https://www.hotel-marais-home.fr/en/'
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
