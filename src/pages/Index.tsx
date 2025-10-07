import { useState } from 'react';
import { Shield, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CitySearch } from '@/components/CitySearch';
import { HelplineCard } from '@/components/HelplineCard';
import { CrimeRateCard } from '@/components/CrimeRateCard';
import { SafetyTipsCard } from '@/components/SafetyTipsCard';
import logo from '@/assets/safeshe-logo.png';
import heroBg from '@/assets/hero-bg.jpg';

// Mock data - in real app, this would come from an API
const cityData: Record<string, any> = {
  'new york': {
    helplines: [
      { name: 'NYC Emergency', number: '911', type: 'Emergency Services' },
      { name: 'NYC Safe Horizon', number: '1-800-621-4673', type: 'Domestic Violence' },
      { name: 'NYC Rape Crisis', number: '212-227-3000', type: 'Sexual Assault Support' },
      { name: 'NYC Anti-Violence Project', number: '212-714-1141', type: 'LGBTQ+ Support' },
    ],
    safetyScore: 72,
    crimeRate: 'Moderate',
    trend: 'down',
    dos: [
      'Stay in well-lit areas at night',
      'Use official taxi services or ride-sharing apps',
      'Keep your belongings secure in crowded areas',
      'Trust your instincts and avoid uncomfortable situations',
      'Share your location with trusted contacts',
    ],
    donts: [
      "Don't walk alone late at night in unfamiliar areas",
      "Don't display expensive jewelry or electronics",
      "Don't accept rides from strangers",
      "Don't leave drinks unattended in bars",
      "Don't ignore your gut feelings about people or places",
    ],
  },
  'mumbai': {
    helplines: [
      { name: 'Mumbai Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Mumbai SNDT Helpline', number: '022-26526020', type: 'Women Support' },
      { name: 'Mumbai Suicide Prevention', number: '022-25521111', type: 'Mental Health' },
    ],
    safetyScore: 65,
    crimeRate: 'Moderate',
    trend: 'down',
    dos: [
      'Use Mumbai local trains in ladies compartments during rush hours',
      'Keep emergency contacts saved and easily accessible',
      'Travel in groups when possible, especially at night',
      'Use registered auto-rickshaws and taxis',
      'Stay aware of your surroundings in crowded markets',
    ],
    donts: [
      "Don't travel in empty train compartments late at night",
      "Don't venture into isolated areas alone",
      "Don't accept food or drinks from strangers",
      "Don't share personal information with unknown people",
      "Don't ignore harassment - report it immediately",
    ],
  },
  'london': {
    helplines: [
      { name: 'UK Emergency Services', number: '999', type: 'Emergency Services' },
      { name: 'National Domestic Abuse Helpline', number: '0808-2000-247', type: 'Domestic Violence' },
      { name: 'Rape Crisis England', number: '0808-500-2222', type: 'Sexual Assault Support' },
      { name: 'Samaritans', number: '116-123', type: 'Mental Health Support' },
    ],
    safetyScore: 78,
    crimeRate: 'Low',
    trend: 'down',
    dos: [
      'Use Transport for London services during peak hours',
      'Keep your phone charged and accessible',
      'Stay on main streets and well-lit areas',
      'Register with TfL SafeTravel for journey alerts',
      'Carry a personal safety alarm',
    ],
    donts: [
      "Don't take unlicensed minicabs",
      "Don't walk through parks alone after dark",
      "Don't leave bags unattended on public transport",
      "Don't engage with aggressive panhandlers",
      "Don't walk while distracted by your phone in busy areas",
    ],
  },
  'delhi': {
    helplines: [
      { name: 'Delhi Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Child Helpline', number: '1098', type: 'Child Protection' },
      { name: 'Direct helpline', number: '181', type: 'Women abuse' },
    ],
    safetyScore: 58,
    crimeRate: 'High',
    trend: 'stable',
    dos: [
      'Avoid isolated areas, especially after dark',
      'Use trusted taxi services or ride-sharing apps',
      'Keep your phone charged and accessible',
      'Inform someone about your whereabouts',
      'Stay alert and trust your instincts',
    ],
    donts: [
      "Don't accept rides from unregistered vehicles",
      "Don't share personal details with strangers",
      "Don't ignore suspicious behavior",
      "Don't leave your drink unattended",
      "Don't hesitate to report any uncomfortable situation",
    ],
  },
  'bengaluru': {
    helplines: [
      { name: 'Bengaluru Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Child Helpline', number: '1098', type: 'Child Protection' },
      { name: 'Direct helpline', number: '181', type: 'women abuse ' },
    ],
    safetyScore: 75,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'chennai': {
    helplines: [
      { name: 'Chennai Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Child Helpline', number: '1098', type: 'Child Protection' },
      { name: 'direct helpine', number: '181', type: 'Women abuse' },
    ],
    safetyScore: 70,
    crimeRate: 'Moderate',
    trend: 'stable',
    dos: [
      'Stick to well-lit and busy areas at night',
      'Use registered auto-rickshaws or ride-sharing apps',
      'Keep your phone charged and accessible',
      'Inform someone about your travel plans',
      'Stay aware of your surroundings',
    ],
    donts: [
      "Don't accept rides from unregistered vehicles",
      "Don't share personal information with strangers",
      "Don't ignore safety advisories",
      "Don't leave your drink unattended",
      "Don't hesitate to report any suspicious activity",
    ],
  },
  'kolkata': {
    helplines: [
      { name: 'Kolkata Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Child Helpline', number: '1098', type: 'Child Protection' },
      { name: 'Direct helpine', number: '181', type: 'Women abuse' },
    ],
    safetyScore: 68,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },

  'lucknow': {
    helplines: [
      { name: 'UP Women Helpline', number: '1090', type: 'Women in Distress' },
      { name: 'UP Police Emergency', number: '112', type: 'Emergency Services' },
      { name: 'UP Women Commission', number: '0522-2306403', type: 'State Commission' },
    ],
    safetyScore: 65,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'jaipur': {
    helplines: [
      { name: 'Rajasthan Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Rajasthan Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Rajasthan Women Commission', number: '0141-2779001-4', type: 'State Commission' },
    ],
    safetyScore: 62,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'nagpur': {
    helplines: [
      { name: 'Maharashtra Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Nagpur Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Nagpur Women Commission', number: '0712-2562186', type: 'State Commission' },
    ],
    safetyScore:70,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'chandigarh': {
    helplines: [
      { name: 'Chandigarh Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Chandigarh Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Chandigarh Women Commission', number: '0172-2703001', type: 'State Commission' },
    ],
    safetyScore: 54,
    crimeRate: 'High',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'goa': {
    helplines: [
      { name: 'Goa Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Goa Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Goa Women Commission', number: '0832-2421080', type: 'State Commission' },
    ],
    safetyScore: 61,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'kerala': {
    helplines: [
      { name: 'Kerala Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Kerala Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Kerala Women Commission', number: '0471-2322590', type: 'State Commission' },
    ],
    safetyScore: 68,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'bhopal': {
    helplines: [
      { name: 'Madhya Pradesh Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Bhopal Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Madhya Pradesh Women Commission', number: '0755-2661813', type: 'State Commission' },
    ],
    safetyScore: 68,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'patna': {
    helplines: [
      { name: 'Bihar Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Patna Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Bihar Women Commission', number: '0612-2507800', type: 'State Commission' },
    ],
    safetyScore: 43,
    crimeRate: 'High',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'ahmedabad': {
    helplines: [
      { name: 'Gujarat Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Ahmedabad Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Gujarat Women Commission', number: '079-23251604', type: 'State Commission' },
    ],
    safetyScore: 56,
    crimeRate: 'Decent',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'hyderabad': {
    helplines: [
      { name: 'Telangana Women Helpline', number: '1091', type: 'Women in Distress' },
      { name: 'Hyderabad Police Emergency', number: '100', type: 'Emergency Services' },
      { name: 'Telangana Women Commission', number: '040-23231212', type: 'State Commission' },
    ],
    safetyScore: 45,
    crimeRate: 'High',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
    'paris': {
    helplines: [
      { name: 'Police Emergency', number: '17', type: 'Emergency Services' },
      { name: 'Violence Femmes Info', number: '3919', type: 'Domestic Violence' },
      { name: 'SOS Femmes En Danger', number: '01 40 33 80 00', type: 'Emergency Shelter' },
    ],
    safetyScore: 59,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'tokyo': {
    helplines: [
      { name: 'Tokyo Metropolitan Police', number: '110', type: 'Emergency Services' },
      { name: 'Tokyo Mental Health Lifeline', number: '03-5774-0992', type: 'Mental Health Support' },
      { name: 'Tokyo Women’s Plaza', number: '03-5467-5252', type: 'Women’s Support Services' },
    ],
    safetyScore: 86,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'sydney': {
    helplines: [
      { name: 'Police Assistance Line', number: '131 444', type: 'Emergency Services' },
      { name: '1800RESPECT', number: '1800 737 732', type: 'Domestic Violence & Sexual Assault' },
      { name: 'Lifeline Australia', number: '13 11 14', type: 'Crisis Support' },
    ],
    safetyScore: 48,
    crimeRate: 'High',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'toronto': {
    helplines: [
      { name: 'Toronto Police Emergency', number: '911', type: 'Emergency Services' },
      { name: 'Ontario Women’s Helpline', number: '1-877-977-0007', type: 'Women’s Support Services' },
      { name: 'Assaulted Women’s Helpline', number: '1-866-863-0511', type: 'Sexual Assault Support' },
    ],
    safetyScore: 50,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
    ],
  },
  'singapore': {
  helplines: [
    { name: 'Police Emergency', number: '999', type: 'Emergency Services' },
    { name: 'Association of Women for Action and Research (AWARE)', number: '1800 774 5935', type: 'Women’s Support Services' },
    { name: 'Samaritans of Singapore (SOS)', number: '1800 221 4444', type: 'Crisis Support' },
    ],
    safetyScore: 89,
    crimeRate: 'Low',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
  ],
},
'moscow': {
  helplines: [
    { name: 'Police Emergency', number: '102', type: 'Emergency Services' },
    { name: 'Women’s Crisis Centre', number: '+7 495 622-38-62', type: 'Domestic Violence' },
    { name: 'Support Line for Women', number: '+7 495 974-28-88', type: 'Women’s Support Services' },
    ],
    safetyScore: 68,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
  ],
},
  'madurai': {
  helplines: [
    { name: 'Police Emergency', number: '100', type: 'Emergency Services' },
    { name: 'Madurai women association', number: '9944835161', type: 'Domestic Violence' },
    { name: 'Support Line for Women', number: '9443056261', type: 'Women’s Support Services' },
    ],
    safetyScore: 60,
    crimeRate: 'Moderate',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
  ],
},
  'Coimbatore': {
  helplines: [
    { name: 'Police Emergency', number: '100', type: 'Emergency Services' },
    { name: 'Women’s Crisis Centre', number: '9791357905', type: 'Domestic Violence' },
    { name: 'Support Line for Women', number: '9655800008', type: 'Women’s Support Services' },
    ],
    safetyScore: 52,
    crimeRate: 'High',
    trend: 'improving',
    dos: [
      'Use well-lit and populated routes at night',
      'Keep emergency contacts easily accessible',
      'Stay informed about local safety updates',
      'Avoid displaying valuables in public',
      'Trust your instincts and seek help when needed',
    ],
    donts: [
      "Don't travel alone in isolated areas after dark",
      "Don't accept unsolicited help from strangers",
      "Don't ignore safety advisories",
      "Don't leave your belongings unattended",
      "Don't hesitate to call for help if you feel unsafe",
  ],
},
  
};

const Index = () => {
  const navigate = useNavigate();
  const [searchedCity, setSearchedCity] = useState<string>('');
  const [cityInfo, setCityInfo] = useState<any>(null);

  const handleSearch = (city: string) => {
    const normalizedCity = city.toLowerCase();
    const data = cityData[normalizedCity];
    
    if (data) {
      setSearchedCity(city);
      setCityInfo(data);
    } else {
      setSearchedCity(city);
      setCityInfo(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <img src={logo} alt="SafeShe Logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SafeShe
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(59, 130, 246, 0.8)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary-foreground drop-shadow-lg animate-fade-in" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Your Safety, Our Priority
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 drop-shadow animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Find emergency helplines, safety statistics, and essential tips for women traveling in any city
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <CitySearch onSearch={handleSearch} />
          </div>
          <div className="flex justify-center mt-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/articles')}
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchedCity && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {cityInfo ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
                  Safety Information for {searchedCity}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    <HelplineCard city={searchedCity} helplines={cityInfo.helplines} />
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                    <CrimeRateCard 
                      city={searchedCity}
                      safetyScore={cityInfo.safetyScore}
                      crimeRate={cityInfo.crimeRate}
                      trend={cityInfo.trend}
                    />
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <SafetyTipsCard 
                    city={searchedCity}
                    dos={cityInfo.dos}
                    donts={cityInfo.donts}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-semibold mb-2">City Not Found</h3>
                <p className="text-muted-foreground">
                  We don't have information for "{searchedCity}" yet. Try searching for New York, Mumbai, or London.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 mt-20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">SafeShe - Empowering Women's Safety Worldwide</p>
          <p className="text-sm">Always trust your instincts and stay safe</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
