import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="font-serif text-2xl text-foreground tracking-wide block mb-6">
              <span className="text-gold">EMBER</span> & OAK
            </a>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Where prime cuts meet open flames, and every meal becomes an unforgettable journey.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-border flex items-center justify-center text-foreground/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Our Story", "Menu", "Private Events", "Gift Cards", "Careers"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-foreground mb-6">Locations</h4>
            <ul className="space-y-4">
              {[
                { city: "New York", address: "485 Park Avenue" },
                { city: "Los Angeles", address: "9560 Wilshire Blvd" },
                { city: "Miami", address: "1901 Collins Avenue" },
              ].map((location) => (
                <li key={location.city} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5" />
                  <div>
                    <p className="text-foreground text-sm font-medium">{location.city}</p>
                    <p className="text-foreground/60 text-sm">{location.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-foreground/60 text-sm">+1 (212) 555-0189</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-foreground/60 text-sm">reserve@emberandoak.com</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-ash mb-2">Hours</p>
              <p className="text-foreground/60 text-sm">
                Monday – Sunday
                <br />
                5:30 PM – 11:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="luxury-divider-wide mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-foreground/40 text-xs">
            © {currentYear} Ember & Oak. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-foreground/40 hover:text-foreground/60 transition-colors duration-300 text-xs"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
