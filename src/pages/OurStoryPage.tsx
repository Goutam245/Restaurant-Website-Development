import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import interiorImage from "@/assets/interior.jpg";
import chefImage from "@/assets/chef.jpg";
import agingRoom from "@/assets/aging-room.jpg";
import barImage from "@/assets/bar.jpg";

const OurStoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Ember & Oak Prime Steakhouse</title>
        <meta name="description" content="Discover the story behind Ember & Oak. From our master butchers to our award-winning culinary team, learn about our passion for prime beef and exceptional dining." />
        <link rel="canonical" href="https://emberandoak.com/our-story" />
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${interiorImage})` }} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">Est. 2008</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>Our Story</h1>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
            A legacy built on fire, time, and an unwavering commitment to excellence
          </p>
        </div>
      </section>

      <main className="bg-background">
        {/* The Beginning */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-ultra uppercase mb-4">The Beginning</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                A Vision Born of <span className="italic">Passion</span>
              </h2>
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  Ember & Oak began in 2008 with a simple yet audacious vision: to create a steakhouse 
                  that would redefine what Americans expect from prime beef. Founders Richard Hartwell 
                  and James Chen, both veterans of Michelin-starred establishments, shared a belief that 
                  the steakhouse experience had grown complacent.
                </p>
                <p>
                  They envisioned a place where the reverence for the ingredient met the precision of 
                  fine dining technique. Where the primal satisfaction of perfectly grilled beef 
                  would be elevated into something transcendent. Where every element—from the hand-selected 
                  cuts to the last pour of wine—would be executed with uncompromising excellence.
                </p>
                <p>
                  The first Ember & Oak opened on Park Avenue in Manhattan, in a historic building 
                  that had once housed one of New York's most celebrated private clubs. The dark 
                  mahogany walls, original brass fixtures, and intimate lighting created the perfect 
                  sanctuary for their vision to come alive.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={interiorImage} alt="Ember & Oak original Manhattan location" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border-2 border-gold/30 hidden lg:block" />
            </div>
          </div>
        </section>

        {/* The Craft */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img src={agingRoom} alt="Ember & Oak dry aging room" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute -top-8 -right-8 w-40 h-40 border-2 border-gold/30 hidden lg:block" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-gold text-xs tracking-ultra uppercase mb-4">The Craft</p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                  Mastering the Art of <span className="italic">Aging</span>
                </h2>
                <div className="space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    At the heart of Ember & Oak lies our dry-aging program—a process that transforms 
                    already exceptional beef into something extraordinary. Each of our restaurants 
                    features a custom-built aging room, climate-controlled to exact specifications: 
                    34-36°F temperature, 80-85% humidity, with constant air circulation.
                  </p>
                  <p>
                    Our master butchers, trained in the art of whole-animal butchery, select only 
                    USDA Prime beef—the top 2% of all American beef—focusing on cattle with superior 
                    marbling and confirmation. These primals are then aged for a minimum of 45 days, 
                    with some specialty cuts aged for 60, 90, or even 120 days.
                  </p>
                  <p>
                    During the aging process, natural enzymes break down muscle fibers, intensifying 
                    flavor and developing the concentrated, nutty, umami-rich character that defines 
                    a true dry-aged steak. It is a process that cannot be rushed—only time creates 
                    this alchemy.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex gap-12">
                    <div>
                      <p className="text-gold text-4xl font-serif">45+</p>
                      <p className="text-xs tracking-widest uppercase text-ash">Days Minimum</p>
                    </div>
                    <div>
                      <p className="text-gold text-4xl font-serif">34°F</p>
                      <p className="text-xs tracking-widest uppercase text-ash">Perfect Temp</p>
                    </div>
                    <div>
                      <p className="text-gold text-4xl font-serif">2%</p>
                      <p className="text-xs tracking-widest uppercase text-ash">Prime Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Chef */}
        <section className="py-24 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-ultra uppercase mb-4">The Artisan</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Executive Chef <span className="italic">Marcus Eldridge</span>
              </h2>
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  Chef Marcus Eldridge joined Ember & Oak in 2012 and has since elevated our 
                  culinary program to unprecedented heights. A graduate of the Culinary Institute 
                  of America, Chef Eldridge honed his craft in the kitchens of Per Se, Le Bernardin, 
                  and spent three formative years in Lyon, France, studying under legendary 
                  Maître Rôtisseur Jacques Moreau.
                </p>
                <p>
                  His philosophy is deceptively simple: respect the ingredient, master the flame, 
                  and never compromise. Under his guidance, our culinary team executes each dish 
                  with the precision of fine dining while honoring the primal, soulful nature 
                  of cooking over open fire.
                </p>
                <p>
                  Chef Eldridge personally oversees the training of every grill cook, ensuring 
                  they understand the subtle differences between cuts, the importance of 
                  temperature control, and the perfect moment to rest each steak. For him, 
                  grilling is not just cooking—it is the oldest form of human nourishment, 
                  and still the most honest.
                </p>
              </div>
              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-serif text-2xl italic text-foreground">
                  "Fire is the oldest form of cooking, and still the most honest. My job is 
                  simply to get out of the way and let the ingredient speak."
                </p>
                <cite className="block mt-4 text-sm text-gold not-italic">— Chef Marcus Eldridge</cite>
              </blockquote>
            </div>
            <div className="relative">
              <img src={chefImage} alt="Executive Chef Marcus Eldridge" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-gold/30 hidden lg:block" />
            </div>
          </div>
        </section>

        {/* The Bar */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <img src={barImage} alt="Ember & Oak bar" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute -top-8 -left-8 w-40 h-40 border-2 border-gold/30 hidden lg:block" />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-gold text-xs tracking-ultra uppercase mb-4">The Experience</p>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                  Beyond the <span className="italic">Plate</span>
                </h2>
                <div className="space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    A meal at Ember & Oak is designed to be a complete sensory experience. Our 
                    award-winning wine program features over 800 selections, with particular 
                    depth in Napa Valley Cabernets, Bordeaux, and rare Burgundies—the perfect 
                    companions to our aged beef.
                  </p>
                  <p>
                    Our bar program, led by Master Sommelier David Hartwick and Head Bartender 
                    Sofia Reyes, offers both classic cocktails executed with precision and 
                    innovative creations inspired by the steakhouse experience. The Manhattan 
                    here is legendary—made with small-batch bourbon, house-made vermouth, and 
                    Luxardo cherries.
                  </p>
                  <p>
                    Every detail has been considered: the weight of the silverware, the 
                    temperature of the plates, the cadence of service. Our servers average 
                    over 12 years of fine dining experience, ensuring that every guest feels 
                    not just served, but truly cared for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-24 container mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4">Recognition</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-12">Awards & Accolades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { award: "Wine Spectator", detail: "Grand Award" },
              { award: "James Beard", detail: "Outstanding Restaurant" },
              { award: "Forbes", detail: "Five Star" },
              { award: "AAA", detail: "Five Diamond" },
            ].map((item) => (
              <div key={item.award} className="p-6 border border-border hover:border-gold/50 transition-colors">
                <p className="font-serif text-xl text-foreground mb-1">{item.award}</p>
                <p className="text-xs tracking-widest uppercase text-gold">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-4xl text-foreground mb-6">Experience the Legend</h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-8">
              Join us for an evening of exceptional cuisine, impeccable service, and memories 
              that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxuryFilled" size="xl" asChild>
                <Link to="/reservations">Reserve Your Table</Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <Link to="/menu">View Our Menu</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurStoryPage;
