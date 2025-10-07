import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CitySearchProps {
  onSearch: (city: string) => void;
}

const availableCities = [
  'New York',
  'Mumbai',
  'London',
  'Delhi',
  'Bengaluru',
  'Chennai',
  'Kolkata',
  'Lucknow',
  'Jaipur',
  'Nagpur',
  'Chandigarh',
  'Goa',
  'Kerala',
  'Bhopal',
  'Patna',
  'Ahmedabad',
  'Hyderabad',
  'Paris',
];

export const CitySearch = ({ onSearch }: CitySearchProps) => {
  const handleCitySelect = (city: string) => {
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none" size={20} />
          <Select onValueChange={handleCitySelect}>
            <SelectTrigger className="pl-10 h-12 text-base">
              <SelectValue placeholder="Select your destination ✈️ Travel smart, stay safe" />
            </SelectTrigger>
            <SelectContent className="bg-popover backdrop-blur-sm z-50 max-h-[300px]">
              {availableCities.map((city) => (
                <SelectItem key={city} value={city} className="cursor-pointer">
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
