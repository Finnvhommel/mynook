import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false); // Sluit het menu na een klik
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo blijft altijd zichtbaar */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="font-['Racing_Sans_One'] text-2xl text-ink tracking-wide z-50"
        >
          MyNook
        </button>

        {/* De drie streepjes (Menu knop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 hover:bg-ink/5 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-ink" /> : <Menu className="w-6 h-6 text-ink" />}
        </button>

        {/* Overlay Menu: Zichtbaar op basis van 'isOpen' */}
        <div className={`
          fixed inset-0 bg-paper flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
          <button 
            onClick={() => handleLinkClick('home')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:opacity-70 transition-opacity"
          >
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('mission')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:opacity-70 transition-opacity"
          >
            Missie
          </button>
          <button 
            onClick={() => handleLinkClick('privacy')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:opacity-70 transition-opacity"
          >
            Privacy
          </button>
        </div>
      </div>
    </nav>
  );
}