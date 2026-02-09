import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav 
      // AANPASSING: Hier stond waarschijnlijk nog een kleur. 
      // Nu staat er expliciet 'bg-transparent' en zijn alle borders/blurs weg.
      className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Logo */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="font-['Racing_Sans_One'] text-2xl text-ink tracking-wide relative z-50"
        >
          MyNook
        </button>

        {/* Menu Toggle Knop */}
        <button 
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 p-2 hover:bg-ink/5 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-ink" /> : <Menu className="w-6 h-6 text-ink" />}
        </button>

        {/* Dropdown Panel */}
        <div className={`
          absolute top-full left-0 w-full 
          bg-paper border-b border-ink/10 shadow-xl z-40
          flex flex-col items-center gap-8 py-12
          transition-all duration-300 ease-in-out origin-top
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
        `}>
          <button 
            onClick={() => handleLinkClick('home')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:text-gold transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('mission')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:text-gold transition-colors"
          >
            Missie
          </button>
          <button 
            onClick={() => handleLinkClick('privacy')}
            className="font-['Racing_Sans_One'] text-4xl text-ink hover:text-gold transition-colors"
          >
            Privacy
          </button>
        </div>
      </div>
    </nav>
  );
}