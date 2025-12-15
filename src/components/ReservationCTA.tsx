import { Button } from "@/components/ui/button";
import wineImage from "@/assets/wine.jpg";

interface ReservationCTAProps {
  onReserveClick: () => void;
}

export function ReservationCTA({ onReserveClick }: ReservationCTAProps) {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${wineImage})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-gold text-xs tracking-ultra uppercase mb-6">
          An Unforgettable Evening Awaits
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Reserve Your Table at
          <span className="block italic text-gold mt-2">Ember & Oak</span>
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Join us for an evening of exceptional cuisine, impeccable service, 
          and memories that will last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="luxuryFilled" size="xl" onClick={onReserveClick}>
            Reserve Your Table
          </Button>
          <Button variant="luxuryOutline" size="xl">
            Private Events
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-16 border-t border-border/30 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-ash mb-2">Call Us</p>
              <p className="font-serif text-lg text-foreground">+1 (212) 555-0189</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-ash mb-2">Hours</p>
              <p className="font-serif text-lg text-foreground">5:30 PM – 11:00 PM</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-ash mb-2">Email</p>
              <p className="font-serif text-lg text-foreground">reserve@emberandoak.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
