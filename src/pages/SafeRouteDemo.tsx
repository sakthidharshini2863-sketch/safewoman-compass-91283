import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Shield, AlertTriangle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import logo from '@/assets/safeshe-logo.png';

interface RouteInfo {
  type: 'normal' | 'safe';
  distance: string;
  duration: string;
  safetyScore: number;
  highlights: string[];
  warnings?: string[];
}

const SafeRouteDemo = () => {
  const navigate = useNavigate();
  const [showRoutes, setShowRoutes] = useState(false);

  const normalRoute : RouteInfo = {
    type: 'normal',
    distance: '3.2 km',
    duration: '12 mins',
    safetyScore: 65,
    highlights: [
      'Shortest distance',
      'Less traffic',
      'Quick route',
    ],
    warnings: [
      'Passes through poorly lit area',
      'Isolated section at night',
      'Limited CCTV coverage',
    ],
  };

  const safeRoute: RouteInfo = {
    type: 'safe',
    distance: '3.8 km',
    duration: '16 mins',
    safetyScore: 92,
    highlights: [
      'Well-lit streets',
      'High foot traffic',
      'CCTV monitored',
      'Near police stations',
      'Women-friendly zones',
    ],
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
          <Navigation className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Safe Route Demo
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Compare normal routes with safer alternatives designed for women's safety
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => setShowRoutes(true)}
            className="shadow-[var(--shadow-glow)]"
          >
            Show Route Comparison
          </Button>
        </div>
      </section>

      {/* Demo Map Section */}
      {showRoutes && (
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Route Comparison: Home to Downtown
            </h2>

            {/* Map Demo - Static representation */}
            <div className="mb-8 relative rounded-lg overflow-hidden border-2 border-border">
              <div className="aspect-video bg-gradient-to-br from-muted via-background to-muted flex items-center justify-center relative">
                {/* Map overlay illustration */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 800 450" fill="none">
                    {/* Street grid */}
                    <g stroke="currentColor" strokeWidth="1">
                      {[...Array(10)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
                      ))}
                      {[...Array(16)].map((_, i) => (
                        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="450" />
                      ))}
                    </g>
                  </svg>
                </div>
                
                {/* Route paths */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
                  {/* Normal route Mumbai - Orange/Red dashed */}
                  <path
                    d="M 100 350 Q 300 300, 400 250 T 700 100"
                    stroke="hsl(0 84% 60%)"
                    strokeWidth="6"
                    strokeDasharray="10,10"
                    fill="none"
                    opacity="0.8"
                  />
                  
                  {/* Safe route Thane- Green solid */}
                  <path
                    d="M 100 350 Q 250 350, 400 320 Q 550 290, 700 100"
                    stroke="hsl(142 76% 36%)"
                    strokeWidth="6"
                    fill="none"
                    opacity="0.9"
                  />
                  
                  {/* Start marker */}
                  <circle cx="100" cy="350" r="12" fill="hsl(270 70% 55%)" />
                  <circle cx="100" cy="350" r="8" fill="white" />
                  
                  {/* End marker */}
                  <circle cx="700" cy="100" r="12" fill="hsl(270 70% 55%)" />
                  <circle cx="700" cy="100" r="8" fill="white" />
                </svg>

                <div className="relative z-10 text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Route Map</h3>
                  <p className="text-muted-foreground">
                    Visual comparison of normal route (red dashed) vs safe route (green solid)
                  </p>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-destructive" style={{ borderTop: '3px dashed' }}></div>
                    <span className="text-sm">Normal Route</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-green-600"></div>
                    <span className="text-sm">Safe Route</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Normal Route Card */}
              <Card className="border-destructive/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="w-5 h-5" />
                        Normal Route
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Standard shortest path
                      </CardDescription>
                    </div>
                    <Badge variant="destructive">
                      Safety: {normalRoute.safetyScore}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{normalRoute.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{normalRoute.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {normalRoute.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {normalRoute.warnings && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-destructive">
                        <AlertTriangle className="w-4 h-4" />
                        Safety Concerns:
                      </h4>
                      <ul className="space-y-1">
                        {normalRoute.warnings.map((warning, idx) => (
                          <li key={idx} className="text-sm text-destructive/80 flex items-start gap-2">
                            <span className="mt-1">⚠</span>
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Safe Route Card */}
              <Card className="border-green-500/50 bg-green-500/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Shield className="w-5 h-5" />
                        Safe Route
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Optimized for safety
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600 text-white hover:bg-green-700">
                      Safety: {safeRoute.safetyScore}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{safeRoute.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{safeRoute.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Shield className="w-4 h-4" />
                      Safety Features:
                    </h4>
                    <ul className="space-y-1">
                      {safeRoute.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-sm text-green-600 dark:text-green-400">
                      <strong>Recommended:</strong> This route adds only 4 minutes but significantly improves your safety with better lighting and higher visibility.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SafeRouteDemo;
