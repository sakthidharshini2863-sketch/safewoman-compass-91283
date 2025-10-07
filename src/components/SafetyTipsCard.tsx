import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SafetyTipsCardProps {
  city: string;
  dos: string[];
  donts: string[];
}

export const SafetyTipsCard = ({ city, dos, donts }: SafetyTipsCardProps) => {
  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/95 to-card/80 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="text-accent" />
          Safety Tips - {city}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
              <CheckCircle size={20} />
              Do's
            </h3>
            <ul className="space-y-3">
              {dos.map((tip, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
              <XCircle size={20} />
              Don'ts
            </h3>
            <ul className="space-y-3">
              {donts.map((tip, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <XCircle className="text-destructive mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
