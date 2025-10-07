import { Shield, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CrimeRateCardProps {
  city: string;
  safetyScore: number;
  crimeRate: string;
  trend: 'up' | 'down';
}

export const CrimeRateCard = ({ city, safetyScore, crimeRate, trend }: CrimeRateCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-secondary';
    if (score >= 40) return 'text-accent';
    return 'text-destructive';
  };

  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-gradient-to-br from-card/95 to-card/80 border-primary/20">
      <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
        <CardTitle className="flex items-center gap-2">
          <Shield className="text-secondary" />
          Safety Statistics - {city}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="text-sm text-muted-foreground mb-2">Safety Score</div>
            <div className={`text-5xl font-bold ${getScoreColor(safetyScore)}`}>
              {safetyScore}/100
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-sm text-muted-foreground mb-1">Crime Rate</div>
              <div className="text-xl font-semibold">{crimeRate}</div>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50">
              <div className="text-sm text-muted-foreground mb-1">Trend</div>
              <div className="flex items-center gap-2">
                {trend === 'down' ? (
                  <>
                    <TrendingDown className="text-secondary" size={20} />
                    <span className="text-xl font-semibold text-secondary">Improving</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="text-accent" size={20} />
                    <span className="text-xl font-semibold text-accent">Rising</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
