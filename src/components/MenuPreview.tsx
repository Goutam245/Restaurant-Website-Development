import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Prime Cuts",
    items: [
      {
        name: "Filet Mignon",
        description: "8oz center-cut tenderloin, exceptionally tender with buttery texture",
        price: "78",
        tag: "Chef's Selection",
      },
      {
        name: "Bone-In Ribeye",
        description: "24oz prime ribeye, rich marbling, 45-day dry-aged",
        price: "125",
      },
      {
        name: "Porterhouse for Two",
        description: "40oz prime porterhouse, the best of both worlds: strip and filet",
        price: "195",
        tag: "Signature",
      },
      {
        name: "Wagyu A5 Striploin",
        description: "6oz Japanese A5 Wagyu from Kagoshima, intensely marbled",
        price: "245",
        tag: "Limited",
      },
    ],
  },
  {
    name: "Starters",
    items: [
      {
        name: "Oysters on the Half Shell",
        description: "Half dozen East Coast oysters, mignonette, fresh horseradish",
        price: "32",
      },
      {
        name: "Steak Tartare",
        description: "Hand-cut prime beef, quail egg, capers, traditional accompaniments",
        price: "28",
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Creamy burrata, aged balsamic, basil oil, sea salt",
        price: "24",
      },
      {
        name: "Seared Foie Gras",
        description: "Hudson Valley foie gras, brioche, port reduction, fig compote",
        price: "42",
        tag: "Indulgent",
      },
    ],
  },
  {
    name: "Accompaniments",
    items: [
      {
        name: "Truffle Mac & Cheese",
        description: "Black truffle, aged gruyère, parmesan crust",
        price: "22",
      },
      {
        name: "Lobster Mashed Potatoes",
        description: "Butter-poached Maine lobster, chive crème fraîche",
        price: "28",
      },
      {
        name: "Charred Broccolini",
        description: "Lemon zest, garlic, extra virgin olive oil",
        price: "16",
      },
      {
        name: "Creamed Spinach",
        description: "Classic preparation, nutmeg, cream",
        price: "14",
      },
    ],
  },
];

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4">
            The Art of Fine Dining
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our Menu
          </h2>
          <div className="luxury-divider" />
          <p className="text-foreground/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Each dish is a testament to our commitment to excellence, 
            featuring the finest ingredients prepared with precision and passion.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`text-sm tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                activeCategory === index
                  ? "border-gold text-gold bg-gold/10"
                  : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {menuData[activeCategory].items.map((item, index) => (
              <div
                key={item.name}
                className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-8 border-b border-border/50 hover:border-gold/30 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] tracking-widest uppercase px-2 py-1 bg-secondary text-gold border border-gold/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-2xl text-gold">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="xl">
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
