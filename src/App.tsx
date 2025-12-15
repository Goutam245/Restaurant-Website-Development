import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import OurStoryPage from "./pages/OurStoryPage";
import PrivateEventsPage from "./pages/PrivateEventsPage";
import GalleryPage from "./pages/GalleryPage";
import ReservationsPage from "./pages/ReservationsPage";
import LocationPage from "./pages/LocationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/private-events" element={<PrivateEventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/locations/:locationSlug" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
