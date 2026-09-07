import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu, MenuItem } from './components/Menu';
import { Experience } from './components/Experience';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleRSVP = (eventTitle: string) => {
    showToast(`RSVP updated for "${eventTitle}". We look forward to having you!`);
  };

  return (
    <div className="min-h-screen bg-coffee-950 text-cream-100 font-sans relative bg-grain">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-coffee-900 border border-amber-500/60 text-cream-50 px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <About />
        <Menu onSelectItem={(item) => setSelectedMenuItem(item)} />
        <Experience onRSVP={handleRSVP} />
        <Location onOpenReservation={() => setIsReservationOpen(true)} />
      </main>

      <Footer />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <MenuModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
      />
    </div>
  );
}

export default App;
