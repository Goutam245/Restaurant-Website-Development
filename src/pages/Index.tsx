import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { MenuPreview } from "@/components/MenuPreview";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Footer } from "@/components/Footer";
import { LocationSelector, Location } from "@/components/LocationSelector";

const Index = () => {
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleReserveClick = () => {
    if (!selectedLocation) {
      setIsLocationSelectorOpen(true);
    } else {
      // Would navigate to reservation page
      console.log("Reserve at:", selectedLocation.name);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ember & Oak | Prime Steakhouse & Fine Dining</title>
        <meta
          name="description"
          content="Experience exceptional prime cuts, aged to perfection and seared over open flames. Ember & Oak offers an unparalleled fine dining steakhouse experience in New York, Los Angeles, and Miami."
        />
        <meta name="keywords" content="steakhouse, fine dining, prime beef, dry aged steak, luxury restaurant, New York, Los Angeles, Miami" />
        <link rel="canonical" href="https://emberandoak.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ember & Oak | Prime Steakhouse & Fine Dining" />
        <meta property="og:description" content="Prime cuts, aged to perfection, seared over open flames. An experience crafted for those who appreciate the extraordinary." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://emberandoak.com" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Ember & Oak",
            "description": "Prime steakhouse offering exceptional dry-aged beef and fine dining experience",
            "servesCuisine": ["Steakhouse", "American", "Fine Dining"],
            "priceRange": "$$$$",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "485 Park Avenue",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10022",
                "addressCountry": "US"
              }
            ],
            "telephone": "+1-212-555-0189",
            "email": "reserve@emberandoak.com",
            "openingHours": "Mo-Su 17:30-23:00"
          })}
        </script>
      </Helmet>

      <main className="bg-background min-h-screen">
        <Navigation
          selectedLocation={selectedLocation}
          onLocationClick={() => setIsLocationSelectorOpen(true)}
        />

        <Hero
          onReserveClick={handleReserveClick}
          onLocationClick={() => setIsLocationSelectorOpen(true)}
          locationName={selectedLocation?.name}
        />

        <Story />

        <MenuPreview />

        <ReservationCTA onReserveClick={handleReserveClick} />

        <Footer />

        <LocationSelector
          isOpen={isLocationSelectorOpen}
          onClose={() => setIsLocationSelectorOpen(false)}
          onSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </main>
    </>
  );
};

export default Index;
