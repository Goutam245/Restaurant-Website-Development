import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Location } from "@/components/LocationSelector";

interface NavigationProps {
  selectedLocation: Location | null;
  onLocationClick: () => void;
}

export function Navigation({ selectedLocation, onLocationClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "/our-story" },
    { label: "Menu", href: "/menu" },
    { label: "Private Events", href: "/private-events" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl md:text-3xl text-foreground tracking-wide">
            <span className="text-gold">EMBER</span> & OAK
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={onLocationClick}
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              <MapPin className="w-4 h-4" />
              {selectedLocation?.city || "Locations"}
            </button>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/reservations">Reserve</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-serif text-foreground hover:text-gold transition-all duration-300 opacity-0 ${
                isMobileMenuOpen ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="luxury"
            size="xl"
            className={`mt-4 opacity-0 ${isMobileMenuOpen ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "500ms" }}
            asChild
          >
            <Link to="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
              Reserve a Table
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
