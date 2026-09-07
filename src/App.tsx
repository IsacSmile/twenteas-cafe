import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Menu, MenuItem } from './components/Menu';
import { Experience } from './components/Experience';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-[#140D08] text-cream-100 font-sans relative bg-grain">
      
      {/* Navbar */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Sections (1-6) */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 2: Our Story */}
        <About />

        {/* Section 3: Founder Card */}
        <Founder />

        {/* Section 4: Menu Showcase Lookbook */}
        <Menu onSelectItem={(item) => setSelectedMenuItem(item)} />

        {/* Section 5: Gatherings Journal */}
        <Experience onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 6: Visit Us */}
        <Location onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <MenuModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}

export default App;
