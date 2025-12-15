import interiorImage from "@/assets/interior.jpg";
import chefImage from "@/assets/chef.jpg";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4">
            Est. 2008
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Story
          </h2>
          <div className="luxury-divider" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          {/* Image */}
          <div className="relative group overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={interiorImage}
                alt="Ember & Oak elegant interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30" />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6 italic">
              A Legacy of Excellence
            </h3>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Ember & Oak was born from a singular vision: to create a sanctuary 
                where the art of the grill meets uncompromising luxury. Every element 
                of our restaurants has been carefully curated to transport you into a 
                world of refined indulgence.
              </p>
              <p>
                Our master butchers source only the finest USDA Prime beef, hand-selecting 
                each cut for its exceptional marbling and flavor. These prized selections 
                are then dry-aged in our custom-built aging rooms, developing deep, 
                complex flavors that can only come from patience and expertise.
              </p>
              <p>
                The result is a dining experience that transcends the ordinary—a symphony 
                of fire, time, and craftsmanship that has earned us recognition among 
                the world's most discerning palates.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-gold text-3xl font-serif">45+</p>
                  <p className="text-xs tracking-widest uppercase text-ash">Days Aged</p>
                </div>
                <div>
                  <p className="text-gold text-3xl font-serif">USDA</p>
                  <p className="text-xs tracking-widest uppercase text-ash">Prime Only</p>
                </div>
                <div>
                  <p className="text-gold text-3xl font-serif">3</p>
                  <p className="text-xs tracking-widest uppercase text-ash">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chef Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:pr-8 order-2 lg:order-1">
            <p className="text-gold text-xs tracking-ultra uppercase mb-4">
              The Artisan
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Executive Chef
              <br />
              <span className="italic">Marcus Eldridge</span>
            </h3>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                With over two decades of experience in the world's most celebrated 
                kitchens, Chef Marcus Eldridge brings an unwavering commitment to 
                excellence to every dish that leaves our kitchen.
              </p>
              <p>
                His philosophy is simple yet profound: respect the ingredient, master 
                the flame, and never compromise. Under his guidance, our culinary team 
                has elevated the steakhouse experience to an art form.
              </p>
            </div>
            <p className="mt-8 font-serif text-2xl italic text-gold">
              "Fire is the oldest form of cooking, and still the most honest."
            </p>
          </div>

          {/* Image */}
          <div className="relative group overflow-hidden order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={chefImage}
                alt="Executive Chef Marcus Eldridge"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
