import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

import wineImage from "@/assets/wine.jpg";

const locations = [
  { id: "nyc", name: "Manhattan", city: "New York", address: "485 Park Avenue, New York, NY 10022" },
  { id: "la", name: "Beverly Hills", city: "Los Angeles", address: "9560 Wilshire Blvd, Beverly Hills, CA 90212" },
  { id: "miami", name: "South Beach", city: "Miami", address: "1901 Collins Avenue, Miami Beach, FL 33139" },
];

const timeSlots = [
  "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

const ReservationsPage = () => {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    time: "",
    partySize: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
    occasion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation Request Submitted", {
      description: "We will confirm your reservation via email shortly.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Reservations | Ember & Oak Prime Steakhouse</title>
        <meta name="description" content="Reserve your table at Ember & Oak. Book online for our Manhattan, Beverly Hills, or Miami Beach locations. Private dining and special occasions welcome." />
        <link rel="canonical" href="https://emberandoak.com/reservations" />
      </Helmet>

      <Navigation selectedLocation={null} onLocationClick={() => {}} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${wineImage})` }} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-xs tracking-ultra uppercase mb-4 animate-fade-up">An Evening Awaits</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>Reservations</h1>
          <p className="text-foreground/80 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Secure your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      <main className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Reservation Form */}
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12">
              <h2 className="font-serif text-3xl text-foreground text-center mb-8">Book Your Table</h2>

              {/* Step 1: Date & Time */}
              <div className="mb-10">
                <h3 className="text-sm tracking-widest uppercase text-gold mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Date & Time
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Location</label>
                    <select 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="">Select Location</option>
                      {locations.map(loc => (
                        <option key={loc.id} value={loc.id}>{loc.name}, {loc.city}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Party Size</label>
                    <select 
                      value={formData.partySize}
                      onChange={(e) => setFormData({...formData, partySize: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="">Select</option>
                      {partySizes.map(size => (
                        <option key={size} value={size}>{size} {size === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests (Private Dining)</option>
                    </select>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mt-6">
                  <label className="text-xs tracking-widest uppercase text-ash block mb-3">Preferred Time</label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({...formData, time})}
                        className={`px-4 py-2 border text-sm transition-all ${
                          formData.time === time
                            ? "border-gold text-gold bg-gold/10"
                            : "border-border text-foreground/60 hover:border-foreground/40"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Info */}
              <div className="mb-10">
                <h3 className="text-sm tracking-widest uppercase text-gold mb-6 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Guest Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">First Name</label>
                    <input 
                      type="text" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Last Name</label>
                    <input 
                      type="text" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Phone</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Special Requests */}
              <div className="mb-10">
                <h3 className="text-sm tracking-widest uppercase text-gold mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Additional Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-ash block mb-2">Occasion (Optional)</label>
                    <select 
                      value={formData.occasion}
                      onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                      className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select Occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="celebration">Celebration</option>
                      <option value="date">Date Night</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-ash block mb-2">Special Requests or Dietary Restrictions</label>
                  <textarea 
                    rows={3}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                    placeholder="Allergies, seating preferences, special arrangements..."
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="luxuryFilled" size="xl" className="w-full">
                Request Reservation
              </Button>

              <p className="text-center text-xs text-ash mt-6">
                For parties larger than 8 guests, please contact our Private Events team.
              </p>
            </form>

            {/* Contact Information */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-border">
                <Phone className="w-6 h-6 text-gold mx-auto mb-3" />
                <h4 className="font-serif text-lg text-foreground mb-2">Call Us</h4>
                <p className="text-foreground/60 text-sm">+1 (212) 555-0189</p>
              </div>
              <div className="p-6 border border-border">
                <Mail className="w-6 h-6 text-gold mx-auto mb-3" />
                <h4 className="font-serif text-lg text-foreground mb-2">Email</h4>
                <p className="text-foreground/60 text-sm">reserve@emberandoak.com</p>
              </div>
              <div className="p-6 border border-border">
                <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
                <h4 className="font-serif text-lg text-foreground mb-2">Hours</h4>
                <p className="text-foreground/60 text-sm">Daily: 5:30 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ReservationsPage;
