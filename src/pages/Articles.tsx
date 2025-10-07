import { Shield, Lock, Smartphone, Users, AlertTriangle, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/safeshe-logo.png';

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="SafeShe Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              SafeShe
            </h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Women's Safety Resources
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Essential knowledge for self-defense and digital safety
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto max-w-6xl space-y-8">
          
          {/* Physical Self-Defense */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="w-6 h-6 text-primary" />
                Physical Self-Defense
              </CardTitle>
              <CardDescription>
                Basic techniques and awareness strategies for personal safety
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Essential Self-Defense Techniques</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Palm Strike:</strong> Use the heel of your palm to strike upward at an attacker's nose or chin</li>
                  <li>• <strong>Eye Gouge:</strong> Target the eyes with your fingers to create distance and escape</li>
                  <li>• <strong>Knee Strike:</strong> Drive your knee upward into the attacker's groin area</li>
                  <li>• <strong>Elbow Strike:</strong> Use your elbow for close-range defense - one of the strongest points</li>
                  <li>• <strong>Stomping:</strong> Stomp hard on an attacker's instep or toes to create pain and escape opportunity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Situational Awareness</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always be aware of your surroundings and potential exits</li>
                  <li>• Trust your instincts - if something feels wrong, it probably is</li>
                  <li>• Avoid distractions like phones when walking alone, especially at night</li>
                  <li>• Walk confidently and maintain good posture to appear less vulnerable</li>
                  <li>• Keep your keys between your fingers as a potential defensive tool</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Verbal Self-Defense</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use a firm, loud voice to set boundaries and attract attention</li>
                  <li>• Practice saying "NO" loudly and assertively</li>
                  <li>• Create a scene - attackers want to avoid attention</li>
                  <li>• Call out specific people for help: "You in the red shirt, call 911!"</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Digital Safety */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lock className="w-6 h-6 text-primary" />
                Digital Safety & Privacy
              </CardTitle>
              <CardDescription>
                Protect yourself online and maintain your digital privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Social Media Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Review and restrict privacy settings on all social media platforms</li>
                  <li>• Don't share real-time locations or travel plans publicly</li>
                  <li>• Be selective about friend/follow requests from unknown people</li>
                  <li>• Avoid posting personal information like your address, phone number, or workplace</li>
                  <li>• Use different profile pictures for different platforms to prevent cross-tracking</li>
                  <li>• Disable location tagging in photos and posts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Password & Account Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use strong, unique passwords for each account (12+ characters with mixed cases, numbers, symbols)</li>
                  <li>• Enable two-factor authentication (2FA) on all important accounts</li>
                  <li>• Use a password manager to securely store credentials</li>
                  <li>• Never share passwords or PINs with anyone</li>
                  <li>• Change passwords immediately if you suspect a breach</li>
                  <li>• Log out of accounts on shared or public computers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Online Harassment & Cyberstalking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Document everything - take screenshots of threatening messages</li>
                  <li>• Block and report abusive accounts immediately</li>
                  <li>• Don't engage with trolls or harassers</li>
                  <li>• Use platform reporting tools and contact authorities for serious threats</li>
                  <li>• Consider making your accounts private if experiencing harassment</li>
                  <li>• Review who can see your followers/following lists</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Safety */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Smartphone className="w-6 h-6 text-primary" />
                Mobile & Device Safety
              </CardTitle>
              <CardDescription>
                Keep your devices secure and use them for personal safety
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone Security Basics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always use a strong PIN, password, or biometric lock</li>
                  <li>• Enable "Find My Device" features for tracking if lost/stolen</li>
                  <li>• Keep your operating system and apps updated</li>
                  <li>• Only download apps from official stores (App Store, Google Play)</li>
                  <li>• Review app permissions regularly and revoke unnecessary access</li>
                  <li>• Use a VPN when connecting to public Wi-Fi</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Safety Apps & Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Download personal safety apps with emergency contact features</li>
                  <li>• Set up emergency SOS shortcuts on your phone</li>
                  <li>• Share your live location with trusted contacts when traveling</li>
                  <li>• Use fake call apps to create an exit strategy from uncomfortable situations</li>
                  <li>• Keep emergency numbers easily accessible (not requiring unlock)</li>
                  <li>• Consider apps with automatic check-in features</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Phishing & Scam Protection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Be skeptical of unsolicited emails, texts, or calls asking for personal info</li>
                  <li>• Verify sender email addresses carefully before clicking links</li>
                  <li>• Never provide financial information via text or email</li>
                  <li>• Hover over links to preview URLs before clicking</li>
                  <li>• Contact companies directly using official numbers, not numbers in suspicious messages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dating & Social Safety */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Heart className="w-6 h-6 text-primary" />
                Dating & Social Safety
              </CardTitle>
              <CardDescription>
                Stay safe while meeting new people online and offline
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Online Dating Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Keep conversations on the dating platform until you feel comfortable</li>
                  <li>• Don't share your last name, workplace, or home address initially</li>
                  <li>• Video chat before meeting in person to verify identity</li>
                  <li>• Trust your instincts - red flags include pressuring, inconsistent stories, or avoiding video calls</li>
                  <li>• Google search or reverse image search profile photos</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">First Meeting Guidelines</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always meet in public places with good lighting and people around</li>
                  <li>• Tell a friend where you're going, who you're meeting, and when to expect you back</li>
                  <li>• Share your live location with a trusted friend during the date</li>
                  <li>• Arrange your own transportation - don't let them pick you up</li>
                  <li>• Keep your phone charged and easily accessible</li>
                  <li>• Watch your drink at all times - order it yourself and never leave it unattended</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Preparedness */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Emergency Preparedness
              </CardTitle>
              <CardDescription>
                Be prepared for various emergency situations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">What to Keep With You</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Personal safety alarm or whistle</li>
                  <li>• Fully charged phone with emergency contacts</li>
                  <li>• Small flashlight or phone flashlight</li>
                  <li>• Pepper spray (where legal) - know how to use it</li>
                  <li>• Emergency cash in a hidden location</li>
                  <li>• List of emergency numbers for your location</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Create a Safety Plan</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Establish code words with trusted friends for emergency situations</li>
                  <li>• Identify safe places along your regular routes</li>
                  <li>• Keep copies of important documents in secure cloud storage</li>
                  <li>• Have a go-bag ready with essentials if you need to leave quickly</li>
                  <li>• Know the locations of police stations, hospitals, and 24-hour businesses</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">If You're Being Followed</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Don't go home - head to a public place with people</li>
                  <li>• Call someone and tell them loudly where you are</li>
                  <li>• Enter a store, restaurant, or any business and ask for help</li>
                  <li>• Make random turns to confirm you're being followed</li>
                  <li>• Call emergency services if you feel in immediate danger</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="w-6 h-6 text-primary" />
                Additional Resources
              </CardTitle>
              <CardDescription>
                Organizations and programs for further support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Self-Defense Training</h3>
                <p className="text-muted-foreground mb-2">
                  Consider taking formal self-defense classes. Look for:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Women-focused self-defense programs like RAD (Rape Aggression Defense)</li>
                  <li>• Martial arts classes (Krav Maga, Brazilian Jiu-Jitsu, Boxing)</li>
                  <li>• Community center or police-sponsored safety workshops</li>
                  <li>• Online video courses for basic techniques (supplement, not replacement for in-person training)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Support Organizations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• National Domestic Violence Hotline (varies by country)</li>
                  <li>• RAINN (Rape, Abuse & Incest National Network)</li>
                  <li>• Local women's shelters and crisis centers</li>
                  <li>• Cyber Civil Rights Initiative (for online harassment)</li>
                  <li>• Without My Consent (revenge porn and privacy violations)</li>
                </ul>
              </div>

              <div className="bg-secondary/30 p-4 rounded-lg border border-border">
                <p className="font-semibold text-lg mb-2">Remember:</p>
                <p className="text-muted-foreground">
                  Your safety is paramount. These tips are meant to empower you, but remember that no situation 
                  is the same. Trust your instincts, prioritize escape over confrontation when possible, and know 
                  that your survival is what matters most. It's never your fault if someone chooses to harm you.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Articles;
