import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";

import heroSteak from "@/assets/hero-steak.jpg";
import interiorImage from "@/assets/interior.jpg";
import chefImage from "@/assets/chef.jpg";
import wineImage from "@/assets/wine.jpg";
import privateDining from "@/assets/private-dining.jpg";
import tomahawk from "@/assets/tomahawk.jpg";
import oysters from "@/assets/oysters.jpg";
import barImage from "@/assets/bar.jpg";
import dessert from "@/assets/dessert.jpg";
import agingRoom from "@/assets/aging-room.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: heroSteak, alt: "Signature ribeye with butter and rosemary", category: "Cuisine" },
  { src: tomahawk, alt: "Tomahawk ribeye steak presentation", category: "Cuisine" },
  { src: oysters, alt: "Fresh oysters on ice", category: "Cuisine" },
  { src: dessert, alt: "Chocolate soufflé with gold leaf", category: "Cuisine" },
  { src: interiorImage, alt: "Main dining room ambiance", category: "Interior" },
  { src: privateDining, alt: "Private dining room", category: "Interior" },
  { src: barImage, alt: "Bar and lounge area", category: "Interior" },
  { src: wineImage, alt: "Wine pour at the table", category: "Experience" },
  { src: chefImage, alt: "Chef preparing prime cuts", category: "Experience" },
  { src: agingRoom, alt: "In-house dry aging room", category: "Experience" },
];

const categories = ["All", "Cuisine", "Interior", "Experience"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Ember & Oak Prime Steakhouse</title>
        <meta name="description" content="Explore the visual story of Ember & Oak. From our signature dishes to our elegant interiors, discover what makes our steakhouse experience extraordinary." />
        <link rel="canonical" href="https://emberandoak.com/gallery" />
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${interiorImage})` }} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">Visual Journey</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>Gallery</h1>
        </div>
      </section>

      <main className="bg-background py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                  activeCategory === category
                    ? "border-gold text-gold bg-gold/10"
                    : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="font-serif text-xl text-foreground">{image.alt}</p>
                    <p className="text-xs tracking-widest uppercase text-gold mt-2">{image.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="text-center mt-4">
              <p className="font-serif text-xl text-foreground">{selectedImage.alt}</p>
              <p className="text-xs tracking-widest uppercase text-gold mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default GalleryPage;
