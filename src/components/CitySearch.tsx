import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CitySearchProps {
  onSearch: (city: string) => void;
}

export const CitySearch = ({ onSearch }: CitySearchProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            type="text"
            placeholder="Enter your destination ✈️ Travel smart,stay safe"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pl-10 h-12 text-base transition-all duration-300 focus:scale-[1.02]"
          />
        </div>
        <Button type="submit" variant="hero" size="lg">
          Search
        </Button>
      </div>
    </form>
  );
};
