import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  image: string;
}

const locations: Location[] = [
  {
    id: "nyc",
    name: "Manhattan",
    city: "New York",
    address: "485 Park Avenue, New York, NY 10022",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  },
  {
    id: "la",
    name: "Beverly Hills",
    city: "Los Angeles",
    address: "9560 Wilshire Blvd, Beverly Hills, CA 90212",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
  },
  {
    id: "miami",
    name: "South Beach",
    city: "Miami",
    address: "1901 Collins Avenue, Miami Beach, FL 33139",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&q=80",
  },
];

interface LocationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (location: Location) => void;
  selectedLocation: Location | null;
}

export function LocationSelector({ isOpen, onClose, onSelect, selectedLocation }: LocationSelectorProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
        <DialogTitle className="sr-only">Select Your Location</DialogTitle>
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-ultra uppercase mb-3 opacity-0 animate-fade-up">
              Select Your Experience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground opacity-0 animate-fade-up delay-100">
              Choose Your Location
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => {
                  onSelect(location);
                  onClose();
                }}
                onMouseEnter={() => setHoveredId(location.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden aspect-[3/4] opacity-0 animate-fade-up transition-all duration-500 ${
                  selectedLocation?.id === location.id ? "ring-2 ring-gold" : ""
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <div className={`transform transition-transform duration-500 ${hoveredId === location.id ? 'translate-y-0' : 'translate-y-2'}`}>
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs tracking-widest uppercase">{location.city}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">{location.name}</h3>
                    <p className={`text-sm text-ash transition-all duration-500 ${hoveredId === location.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>
                      {location.address}
                    </p>
                  </div>
                </div>

                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gold transform origin-left transition-transform duration-500 ${hoveredId === location.id ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { locations };
export type { Location };
