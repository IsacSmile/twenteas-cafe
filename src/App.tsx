import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Menu, MenuItem } from './components/Menu';
import { Experience } from './components/Experience';
import { Instagram } from './components/Instagram';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';

export function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen bg-[#140D08] text-cream-100 font-sans relative bg-grain">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Founder />
        <Menu onSelectItem={(item) => setSelectedMenuItem(item)} />
        <Experience />
        <Instagram />
        <Location />
      </main>

      {/* Footer */}
      <Footer />

      {/* Showcase Detail Modal */}
      <MenuModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
      />
    </div>
  );
}

export default App;
