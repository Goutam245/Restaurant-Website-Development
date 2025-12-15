import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-steak.jpg";

interface HeroProps {
  onReserveClick: () => void;
  onLocationClick: () => void;
  locationName?: string;
}

export function Hero({ onReserveClick, onLocationClick, locationName }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p 
            className="text-gold text-xs md:text-sm tracking-ultra uppercase mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            A Culinary Journey Like No Other
          </p>

          {/* Main Title */}
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-[1.1] animate-fade-up"
            style={{ animationDelay: '0.4s', textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            Where Fire Meets
            <br />
            <span className="italic text-gold">Perfection</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            Prime cuts, aged to perfection, seared over open flames. 
            An experience crafted for those who appreciate the extraordinary.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button variant="luxuryFilled" size="xl" onClick={onReserveClick}>
              Reserve Your Table
            </Button>
            <Button variant="luxuryOutline" size="xl" onClick={onLocationClick}>
              {locationName ? `Dining at ${locationName}` : "Select Location"}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-up"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="#story"
            className="flex flex-col items-center text-foreground/60 hover:text-gold transition-colors duration-300"
          >
            <span className="text-xs tracking-widest uppercase mb-2">Discover</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
