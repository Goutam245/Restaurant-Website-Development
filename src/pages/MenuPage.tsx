import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import heroSteak from "@/assets/hero-steak.jpg";
import tomahawk from "@/assets/tomahawk.jpg";
import oysters from "@/assets/oysters.jpg";
import dessert from "@/assets/dessert.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

const fullMenu: MenuCategory[] = [
  {
    id: "raw-bar",
    name: "Raw Bar",
    description: "The freshest selections from both coasts, served pristine",
    items: [
      { name: "East Coast Oysters", description: "Half dozen Blue Points from Long Island, champagne mignonette, fresh horseradish, cocktail sauce", price: "32" },
      { name: "West Coast Oysters", description: "Half dozen Kumamotos from Washington, cucumber-sake granita, ponzu", price: "36" },
      { name: "Oyster Grand Plateau", description: "Two dozen mixed oysters, littleneck clams, jumbo shrimp, lobster tail, all accompaniments", price: "195", tag: "For Two" },
      { name: "Tuna Tartare", description: "Sushi-grade ahi tuna, avocado mousse, crispy wontons, sesame-soy glaze, micro wasabi", price: "28" },
      { name: "Steak Tartare", description: "Hand-cut USDA Prime beef, quail egg yolk, capers, cornichons, dijon, grilled crostini", price: "32", tag: "Signature" },
      { name: "Yellowtail Crudo", description: "Japanese hamachi, yuzu kosho, jalapeño, cilantro oil, maldon sea salt", price: "26" },
    ],
  },
  {
    id: "starters",
    name: "First Courses",
    description: "Artfully crafted beginnings to your culinary journey",
    items: [
      { name: "Burrata & Heirloom Tomato", description: "Creamy Pugliese burrata, vine-ripened heirloom tomatoes, aged balsamic reduction, basil oil, fleur de sel", price: "24" },
      { name: "Seared Foie Gras", description: "Hudson Valley foie gras, toasted brioche, caramelized figs, sauternes reduction, micro arugula", price: "42", tag: "Indulgent" },
      { name: "Lobster Bisque", description: "Maine lobster meat, cognac cream, chive oil, puff pastry dome", price: "22" },
      { name: "Caesar Salad", description: "Crisp hearts of romaine, white anchovy, shaved parmigiano-reggiano, garlic croutons, classic dressing", price: "18" },
      { name: "Wedge Salad", description: "Iceberg lettuce, Maytag blue cheese crumbles, applewood bacon lardons, cherry tomatoes, buttermilk dressing", price: "16" },
      { name: "Jumbo Lump Crab Cake", description: "Maryland blue crab, old bay remoulade, pickled fennel, citrus segments", price: "38", tag: "House Favorite" },
      { name: "Bacon Flight", description: "Three preparations: applewood smoked, maple-black pepper, brown sugar glazed", price: "24" },
    ],
  },
  {
    id: "prime-cuts",
    name: "Prime Cuts",
    description: "USDA Prime beef, dry-aged in-house for a minimum of 45 days",
    items: [
      { name: "Filet Mignon", description: "8oz center-cut tenderloin, exceptionally tender with a buttery texture. The most refined cut.", price: "78", tag: "Most Popular" },
      { name: "New York Strip", description: "16oz bone-in strip, perfect balance of tenderness and robust beefy flavor, 45-day dry-aged", price: "82" },
      { name: "Bone-In Ribeye", description: "24oz prime ribeye, exceptional marbling, rich and intensely flavored, 45-day dry-aged", price: "125" },
      { name: "Tomahawk Ribeye", description: "40oz long-bone ribeye, dramatically presented, perfect for sharing or the serious carnivore", price: "175", tag: "Showstopper" },
      { name: "Porterhouse for Two", description: "40oz prime porterhouse, the best of both worlds: buttery filet and flavorful strip on the bone", price: "195", tag: "Signature" },
      { name: "Prime Rib", description: "Slow-roasted 22oz bone-in prime rib, au jus, creamy horseradish. Available Friday-Sunday only.", price: "85", tag: "Weekend Special" },
      { name: "Dry-Aged Delmonico", description: "18oz boneless ribeye, 60-day dry-aged for intensified depth of flavor", price: "98" },
    ],
  },
  {
    id: "wagyu",
    name: "Japanese Wagyu",
    description: "The pinnacle of beef excellence, imported directly from Japan",
    items: [
      { name: "A5 Kagoshima Striploin", description: "6oz Japanese A5 Wagyu from Kagoshima Prefecture, intensely marbled, buttery rich", price: "245", tag: "Ultra Premium" },
      { name: "A5 Miyazaki Ribeye", description: "8oz from Miyazaki, winner of the Wagyu Olympics, exceptional sweetness and umami", price: "285", tag: "Rare Selection" },
      { name: "American Wagyu Filet", description: "10oz Snake River Farms, perfect fusion of American beef flavor with Wagyu marbling", price: "125" },
      { name: "Wagyu Tasting Flight", description: "3oz each of A5 Striploin, A5 Ribeye, and American Wagyu. The ultimate comparison.", price: "225", tag: "Experience" },
    ],
  },
  {
    id: "seafood",
    name: "From the Sea",
    description: "Premium seafood, sustainably sourced and expertly prepared",
    items: [
      { name: "Whole Maine Lobster", description: "2lb lobster, steamed or grilled, drawn butter, lemon. Market price.", price: "MP" },
      { name: "Chilean Sea Bass", description: "12oz miso-glazed, baby bok choy, shiitake mushrooms, ginger-scallion broth", price: "68" },
      { name: "Dover Sole", description: "Whole fish, tableside preparation, brown butter, capers, lemon, parsley", price: "85", tag: "Tableside" },
      { name: "Jumbo Diver Scallops", description: "Pan-seared U-10 scallops, cauliflower puree, golden raisins, caper-brown butter", price: "58" },
      { name: "Grilled Branzino", description: "Mediterranean sea bass, herb-lemon vinaigrette, roasted vegetables", price: "52" },
    ],
  },
  {
    id: "sides",
    name: "Accompaniments",
    description: "Classic steakhouse sides, elevated to perfection",
    items: [
      { name: "Truffle Mac & Cheese", description: "Black winter truffle, aged gruyère, parmesan breadcrumb crust", price: "22", tag: "Most Popular" },
      { name: "Lobster Mashed Potatoes", description: "Butter-poached Maine lobster, Yukon gold potatoes, chive crème fraîche", price: "28" },
      { name: "Creamed Spinach", description: "Classic preparation, fresh nutmeg, hint of cream", price: "14" },
      { name: "Sautéed Wild Mushrooms", description: "Seasonal selection, garlic, thyme, sherry, truffle oil drizzle", price: "18" },
      { name: "Charred Broccolini", description: "Lemon zest, garlic, Calabrian chili, extra virgin olive oil", price: "16" },
      { name: "Crispy Brussels Sprouts", description: "Applewood bacon, balsamic glaze, shaved parmesan", price: "16" },
      { name: "Au Gratin Potatoes", description: "Thinly sliced, gruyère, cream, golden crust", price: "15" },
      { name: "Loaded Baked Potato", description: "Idaho potato, sour cream, chives, bacon, cheddar", price: "14" },
      { name: "Asparagus", description: "Grilled jumbo spears, hollandaise sauce", price: "16" },
      { name: "Bone Marrow", description: "Roasted marrow bones, herb salad, grilled bread, fleur de sel", price: "24", tag: "Indulgent" },
    ],
  },
  {
    id: "sauces",
    name: "Sauces & Enhancements",
    description: "Complement your steak with our house-made preparations",
    items: [
      { name: "Béarnaise", description: "Classic French, tarragon, shallot, white wine reduction", price: "6" },
      { name: "Peppercorn Cream", description: "Green and black peppercorns, cognac, cream", price: "6" },
      { name: "Red Wine Reduction", description: "Cabernet, bone marrow, fresh herbs", price: "6" },
      { name: "Blue Cheese Crust", description: "Maytag blue cheese, herbed breadcrumb topping", price: "8" },
      { name: "Oscar Style", description: "Jumbo lump crab, asparagus, béarnaise", price: "28" },
      { name: "Foie Gras Butter", description: "Compound butter with Hudson Valley foie gras", price: "18" },
    ],
  },
  {
    id: "desserts",
    name: "Sweet Finales",
    description: "Decadent endings crafted by our pastry team",
    items: [
      { name: "Molten Chocolate Cake", description: "Valrhona dark chocolate, flowing center, vanilla bean ice cream, 24-karat gold leaf", price: "18", tag: "Signature" },
      { name: "New York Cheesecake", description: "Classic creamy style, graham cracker crust, seasonal berry compote", price: "16" },
      { name: "Crème Brûlée", description: "Madagascar vanilla bean custard, caramelized sugar crust", price: "14" },
      { name: "Tableside Bananas Foster", description: "Caramelized bananas, rum, brown sugar, vanilla ice cream, flambéed tableside", price: "22", tag: "Tableside" },
      { name: "Seasonal Fruit Tart", description: "Almond cream, fresh seasonal fruits, apricot glaze", price: "14" },
      { name: "Affogato", description: "Vanilla gelato, fresh espresso, amaretto, biscotti", price: "12" },
    ],
  },
];

const MenuPage = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Ember & Oak Prime Steakhouse</title>
        <meta name="description" content="Explore our menu of USDA Prime dry-aged steaks, Japanese A5 Wagyu, fresh seafood, and house-made sides. Every dish crafted with precision and passion." />
        <link rel="canonical" href="https://emberandoak.com/menu" />
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroSteak})` }} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">The Art of Fine Dining</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>Our Menu</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Every dish is a testament to our commitment to excellence, featuring the finest ingredients prepared with precision and passion.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <nav className="sticky top-16 z-30 bg-card/95 backdrop-blur-md border-b border-border py-4 overflow-x-auto">
        <div className="container mx-auto px-6 flex gap-6 justify-start md:justify-center min-w-max">
          {fullMenu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="text-xs tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors whitespace-nowrap"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Sections */}
      <main className="bg-background py-16">
        <div className="container mx-auto px-6">
          {fullMenu.map((category, categoryIndex) => (
            <section key={category.id} id={category.id} className="mb-24 scroll-mt-32">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{category.name}</h2>
                <div className="luxury-divider mb-4" />
                <p className="text-foreground/60 max-w-xl mx-auto">{category.description}</p>
              </div>

              {/* Featured Image for select categories */}
              {categoryIndex === 0 && (
                <div className="mb-12 flex justify-center">
                  <img src={oysters} alt="Fresh oysters" className="w-full max-w-2xl h-64 object-cover" />
                </div>
              )}
              {categoryIndex === 2 && (
                <div className="mb-12 flex justify-center">
                  <img src={tomahawk} alt="Prime cuts" className="w-full max-w-2xl h-64 object-cover" />
                </div>
              )}
              {categoryIndex === 7 && (
                <div className="mb-12 flex justify-center">
                  <img src={dessert} alt="Desserts" className="w-full max-w-2xl h-64 object-cover" />
                </div>
              )}

              {/* Menu Items */}
              <div className="max-w-4xl mx-auto space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-6 border-b border-border/30 hover:border-gold/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 bg-secondary text-gold border border-gold/30">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-foreground/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <span className="font-serif text-xl text-gold whitespace-nowrap">
                      {item.price === "MP" ? "Market Price" : `$${item.price}`}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Reservation CTA */}
          <div className="text-center mt-16 pt-16 border-t border-border">
            <p className="text-gold text-xs tracking-ultra uppercase mb-4">Ready to Dine?</p>
            <h3 className="font-serif text-3xl text-foreground mb-6">Reserve Your Table</h3>
            <Button variant="luxuryFilled" size="xl" asChild>
              <Link to="/reservations">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MenuPage;
