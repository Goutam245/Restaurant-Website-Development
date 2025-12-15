import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Wine, Utensils, Calendar } from "lucide-react";

import privateDining from "@/assets/private-dining.jpg";
import interiorImage from "@/assets/interior.jpg";
import barImage from "@/assets/bar.jpg";

interface EventPackage {
  name: string;
  capacity: string;
  description: string;
  features: string[];
  startingPrice: string;
}

const packages: EventPackage[] = [
  {
    name: "The Vintage Room",
    capacity: "Up to 16 guests",
    description: "Our most intimate private dining space, perfect for executive dinners, proposals, and milestone celebrations. Features a curated selection from our reserve wine cellar.",
    features: ["Dedicated sommelier", "Custom menu creation", "Audio-visual equipment", "Private restroom"],
    startingPrice: "3,500",
  },
  {
    name: "The Oak Room",
    capacity: "Up to 40 guests",
    description: "A stunning private room with floor-to-ceiling wine displays, perfect for corporate events, rehearsal dinners, and special occasions requiring both elegance and space.",
    features: ["Full bar service", "Presentation capabilities", "Private entrance", "Dance floor option"],
    startingPrice: "8,500",
  },
  {
    name: "The Grand Salon",
    capacity: "Up to 80 guests",
    description: "Our largest private event space, ideal for weddings, galas, and corporate gatherings. Features dramatic chandeliers and sweeping views of the city.",
    features: ["Event coordinator", "Custom lighting", "Live music accommodations", "Valet service"],
    startingPrice: "18,000",
  },
  {
    name: "Full Restaurant Buyout",
    capacity: "Up to 200 guests",
    description: "For truly extraordinary occasions, reserve the entire restaurant for your exclusive use. An unforgettable setting for landmark celebrations.",
    features: ["Complete exclusivity", "Customized experience", "Full culinary team", "Premium amenities"],
    startingPrice: "45,000",
  },
];

const upcomingEvents = [
  {
    date: "December 31, 2025",
    name: "New Year's Eve Gala",
    description: "Ring in the new year with a six-course tasting menu, champagne, live jazz, and a midnight countdown.",
    price: "$395 per person",
  },
  {
    date: "February 14, 2026",
    name: "Valentine's Day Experience",
    description: "An intimate five-course menu celebrating love, featuring oysters, prime cuts, and chocolate indulgence.",
    price: "$275 per person",
  },
  {
    date: "Monthly",
    name: "Winemaker Dinners",
    description: "Join us for exclusive dinners featuring renowned winemakers and perfectly paired multi-course menus.",
    price: "$225 per person",
  },
];

const PrivateEventsPage = () => {
  return (
    <>
      <Helmet>
        <title>Private Events | Ember & Oak Prime Steakhouse</title>
        <meta name="description" content="Host your next celebration at Ember & Oak. Private dining rooms, corporate events, weddings, and special occasions. Contact our events team for a personalized experience." />
        <link rel="canonical" href="https://emberandoak.com/private-events" />
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${privateDining})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">Celebrations & Corporate</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>Private Events</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Create unforgettable moments in our exceptional private dining spaces
          </p>
        </div>
      </section>

      <main className="bg-background">
        {/* Introduction */}
        <section className="py-24 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold text-xs tracking-ultra uppercase mb-4">Exceptional Gatherings</p>
            <h2 className="font-serif text-4xl text-foreground mb-6">Where Every Occasion Becomes Extraordinary</h2>
            <p className="text-foreground/70 leading-relaxed">
              From intimate celebrations to grand corporate galas, Ember & Oak offers private dining 
              experiences that exceed expectations. Our dedicated events team works closely with you 
              to craft every detail—from customized menus to personalized service—ensuring your event 
              is nothing short of remarkable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Corporate Dinners" },
              { icon: Wine, label: "Wine Tastings" },
              { icon: Utensils, label: "Rehearsal Dinners" },
              { icon: Calendar, label: "Milestone Events" },
            ].map((item) => (
              <div key={item.label} className="p-6 border border-border hover:border-gold/50 transition-colors group">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm tracking-widest uppercase text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Private Rooms */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-ultra uppercase mb-4">Our Spaces</p>
              <h2 className="font-serif text-4xl text-foreground mb-4">Private Dining Rooms</h2>
              <div className="luxury-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg) => (
                <div key={pkg.name} className="bg-background border border-border p-8 hover:border-gold/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-foreground mb-1">{pkg.name}</h3>
                      <p className="text-xs tracking-widest uppercase text-gold">{pkg.capacity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-ash">Starting at</p>
                      <p className="font-serif text-xl text-gold">${pkg.startingPrice}</p>
                    </div>
                  </div>
                  <p className="text-foreground/60 mb-6 leading-relaxed">{pkg.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-1 h-1 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-ultra uppercase mb-4">Ambiance</p>
            <h2 className="font-serif text-4xl text-foreground">Our Event Spaces</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src={privateDining} alt="The Vintage Room" className="w-full h-80 object-cover" />
            <img src={interiorImage} alt="Main dining room" className="w-full h-80 object-cover" />
            <img src={barImage} alt="Bar lounge area" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-xs tracking-ultra uppercase mb-4">Mark Your Calendar</p>
              <h2 className="font-serif text-4xl text-foreground mb-4">Upcoming Special Events</h2>
              <div className="luxury-divider" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {upcomingEvents.map((event) => (
                <div key={event.name} className="bg-background border border-border p-8 text-center hover:border-gold/30 transition-colors">
                  <p className="text-gold text-xs tracking-widest uppercase mb-3">{event.date}</p>
                  <h3 className="font-serif text-2xl text-foreground mb-4">{event.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{event.description}</p>
                  <p className="font-serif text-lg text-gold">{event.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="py-24 container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-ultra uppercase mb-4">Start Planning</p>
              <h2 className="font-serif text-4xl text-foreground mb-6">Let Us Create Your Perfect Event</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Our dedicated events team is here to help bring your vision to life. Whether you are 
                planning an intimate dinner or a grand celebration, we will work with you to create 
                an unforgettable experience tailored to your needs.
              </p>
              <div className="space-y-4 text-foreground/70">
                <p><strong className="text-foreground">Events Director:</strong> Catherine Reynolds</p>
                <p><strong className="text-foreground">Phone:</strong> +1 (212) 555-0192</p>
                <p><strong className="text-foreground">Email:</strong> events@emberandoak.com</p>
              </div>
            </div>
            <div className="bg-card border border-border p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6 text-center">Request Information</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Full Name</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Email</label>
                  <input type="email" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Event Date</label>
                  <input type="date" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Number of Guests</label>
                  <input type="number" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Tell Us About Your Event</label>
                  <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors resize-none" />
                </div>
                <Button variant="luxuryFilled" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivateEventsPage;
