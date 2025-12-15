import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Calendar } from "lucide-react";

import interiorImage from "@/assets/interior.jpg";
import chefImage from "@/assets/chef.jpg";
import barImage from "@/assets/bar.jpg";

interface LocationData {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  description: string;
  chefName: string;
  chefBio: string;
  specialties: string[];
  heroImage: string;
  mapEmbed: string;
}

const locationData: Record<string, LocationData> = {
  "new-york": {
    id: "nyc",
    name: "Manhattan",
    city: "New York",
    address: "485 Park Avenue, New York, NY 10022",
    phone: "+1 (212) 555-0189",
    hours: "Monday - Sunday: 5:30 PM - 11:00 PM",
    description: "Our flagship location occupies a historic Park Avenue building that once housed one of Manhattan's most exclusive private clubs. The original mahogany paneling, brass fixtures, and intimate lighting create an atmosphere of timeless elegance. Here, the energy of New York meets the refinement of old-world hospitality, offering an experience that has made us a destination for discerning diners from around the world.",
    chefName: "Marcus Eldridge",
    chefBio: "Executive Chef Marcus Eldridge leads our Manhattan kitchen with over two decades of experience from Per Se, Le Bernardin, and three formative years in Lyon, France. His philosophy: respect the ingredient, master the flame, never compromise.",
    specialties: ["60-Day Dry-Aged Prime Rib (Weekend Only)", "Tableside Steak Diane", "Manhattan Cocktail Service"],
    heroImage: interiorImage,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.97!3d40.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzM2LjAiTiA3M8KwNTgnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890",
  },
  "los-angeles": {
    id: "la",
    name: "Beverly Hills",
    city: "Los Angeles",
    address: "9560 Wilshire Blvd, Beverly Hills, CA 90212",
    phone: "+1 (310) 555-0147",
    hours: "Monday - Sunday: 5:00 PM - 11:30 PM",
    description: "Set in the heart of Beverly Hills, our Los Angeles location brings Ember & Oak's signature excellence to the West Coast. Floor-to-ceiling windows frame views of the city, while our open kitchen allows guests to witness the theatrical art of grilling. The California location features an expanded raw bar and an award-winning cocktail program that nods to the glamour of old Hollywood.",
    chefName: "Sofia Martinez",
    chefBio: "Chef Sofia Martinez brings her California sensibility and experience from Spago and Providence to create a menu that honors our traditions while embracing the bounty of the Pacific Coast.",
    specialties: ["California Wagyu Tomahawk", "Dungeness Crab Tower", "Sunset Terrace Dining"],
    heroImage: barImage,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1!2d-118.40!3d34.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzM2LjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
  },
  "miami": {
    id: "miami",
    name: "South Beach",
    city: "Miami",
    address: "1901 Collins Avenue, Miami Beach, FL 33139",
    phone: "+1 (305) 555-0163",
    hours: "Monday - Sunday: 6:00 PM - 12:00 AM",
    description: "Our Miami Beach location captures the vibrant energy of South Beach while maintaining the sophistication that defines Ember & Oak. Located steps from the ocean, this art deco-inspired space features an outdoor terrace, live Latin jazz on weekends, and a menu that incorporates the bold flavors of the Caribbean and Latin America alongside our classic offerings.",
    chefName: "Carlos Gutierrez",
    chefBio: "Chef Carlos Gutierrez, a Miami native and James Beard semifinalist, infuses our South Beach menu with Latin influences from his Cuban heritage and training in the finest kitchens of South America.",
    specialties: ["Chimichurri-Crusted Ribeye", "Stone Crab (In Season)", "Oceanfront Terrace Service"],
    heroImage: chefImage,
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1!2d-80.13!3d25.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ3JzI0LjAiTiA4MMKwMDcnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890",
  },
};

const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? locationData[locationSlug] : null;

  if (!location) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Location Not Found</h1>
          <Button variant="luxury" asChild>
            <Link to="/locations">View All Locations</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{location.name} | Ember & Oak {location.city}</title>
        <meta name="description" content={`Visit Ember & Oak ${location.name} in ${location.city}. ${location.address}. Prime steakhouse featuring USDA Prime dry-aged beef. Make a reservation today.`} />
        <link rel="canonical" href={`https://emberandoak.com/locations/${locationSlug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": `Ember & Oak ${location.name}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": location.address.split(",")[0],
              "addressLocality": location.city,
            },
            "telephone": location.phone,
            "servesCuisine": ["Steakhouse", "American", "Fine Dining"],
            "priceRange": "$$$$",
          })}
        </script>
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${location.heroImage})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">{location.city}</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {location.name}
          </h1>
          <p className="text-foreground/80 animate-fade-up" style={{ animationDelay: '0.4s' }}>{location.address}</p>
        </div>
      </section>

      <main className="bg-background">
        {/* About This Location */}
        <section className="py-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-ash mb-1">Address</h4>
                  <p className="text-foreground">{location.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-ash mb-1">Reservations</h4>
                  <p className="text-foreground">{location.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-1" />
                <div>
                  <h4 className="text-xs tracking-widest uppercase text-ash mb-1">Hours</h4>
                  <p className="text-foreground">{location.hours}</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">About This Location</h2>
              <p className="text-foreground/70 leading-relaxed max-w-3xl mx-auto">{location.description}</p>
            </div>

            {/* Location Specialties */}
            <div className="bg-card border border-border p-8 mb-16">
              <h3 className="font-serif text-2xl text-foreground text-center mb-6">Location Specialties</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {location.specialties.map((specialty) => (
                  <span key={specialty} className="px-4 py-2 border border-gold/30 text-gold text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Chef */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src={chefImage} alt={`Chef ${location.chefName}`} className="w-full aspect-square object-cover" />
              <div>
                <p className="text-gold text-xs tracking-ultra uppercase mb-3">Executive Chef</p>
                <h3 className="font-serif text-3xl text-foreground mb-4">{location.chefName}</h3>
                <p className="text-foreground/70 leading-relaxed">{location.chefBio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl text-foreground mb-6">Reserve Your Table at {location.name}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxuryFilled" size="xl" asChild>
                <Link to="/reservations">Make a Reservation</Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Other Locations */}
        <section className="py-24 container mx-auto px-6">
          <h3 className="font-serif text-2xl text-foreground text-center mb-12">Our Other Locations</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.entries(locationData)
              .filter(([slug]) => slug !== locationSlug)
              .map(([slug, loc]) => (
                <Link
                  key={slug}
                  to={`/locations/${slug}`}
                  className="group text-center p-6 border border-border hover:border-gold/50 transition-colors"
                >
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">{loc.city}</p>
                  <h4 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">{loc.name}</h4>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LocationPage;
