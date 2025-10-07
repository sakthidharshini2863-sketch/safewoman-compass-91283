import { Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Helpline {
  name: string;
  number: string;
  type: string;
}

interface HelplineCardProps {
  city: string;
  helplines: Helpline[];
}

export const HelplineCard = ({ city, helplines }: HelplineCardProps) => {
  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/95 to-card/80 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="flex items-center gap-2">
          <Phone className="text-primary" />
          Emergency Helplines - {city}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {helplines.map((helpline, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div className="flex-1">
                <div className="font-semibold text-foreground">{helpline.name}</div>
                <div className="text-sm text-muted-foreground">{helpline.type}</div>
              </div>
              <a 
                href={`tel:${helpline.number}`}
                className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {helpline.number}
              </a>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
