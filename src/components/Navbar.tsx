import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Onze Missie' },
    { id: 'privacy', label: 'Privacy' },
  ];

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* 1. De click-away overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* De Navigatiebalk (Glass Effect) */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
        ${isOpen ? 'bg-paper' : 'bg-paper/80 backdrop-blur-md border-b border-ink/5'}
      `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="font-['Racing_Sans_One'] text-2xl text-ink tracking-wide relative z-50"
          >
            MyNook
          </button>

          {/* AANPASSING: De Menu Toggle Knop in 'Glass' stijl 
             - bg-paper/50: Half transparant
             - backdrop-blur-md: Blur effect in de knop zelf
             - border & shadow: Zorgt dat hij 'op' de balk ligt
          */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`
              relative z-50 p-3 rounded-full transition-all duration-300
              border border-ink/5 shadow-sm
              hover:bg-paper/80 hover:shadow-md hover:-translate-y-0.5
              ${isOpen ? 'bg-paper text-ink' : 'bg-paper/40 backdrop-blur-md text-ink'}
            `}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Dropdown Panel */}
          <div className={`
            absolute top-full left-0 w-full 
            bg-paper border-b border-ink/10 shadow-xl z-40
            rounded-b-[2.5rem]
            flex flex-col items-center gap-6 py-10
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top
            ${isOpen ? 'opacity-100 translate-y-0 visible scale-y-100' : 'opacity-0 -translate-y-4 invisible scale-y-95'}
          `}>
            
            {navLinks.map((link, index) => (
              <button 
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{ transitionDelay: `${isOpen ? index * 100 + 100 : 0}ms` }}
                className={`
                  font-['Racing_Sans_One'] text-4xl text-ink hover:text-gold transition-all duration-500
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                {link.label}
              </button>
            ))}

            {/* Android Knop */}
            <a
              href="https://tally.so/r/Pd59vd"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${isOpen ? 400 : 0}ms` }}
              className={`
                mt-4 px-8 py-3 bg-gold text-white rounded-full 
                font-['Racing_Sans_One'] text-xl tracking-wide w-64 text-center
                shadow-lg transform hover:-translate-y-1 hover:shadow-xl hover:bg-gold/90
                transition-all duration-500
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Android Beta
            </a>

            {/* iOS Knop */}
            <a
              href="https://tally.so/r/682KAO"
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${isOpen ? 500 : 0}ms` }}
              className={`
                px-8 py-3 bg-ink text-white rounded-full 
                font-['Racing_Sans_One'] text-xl tracking-wide w-64 text-center
                shadow-lg transform hover:-translate-y-1 hover:shadow-xl hover:bg-ink/90
                transition-all duration-500
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              iOS Wachtlijst
            </a>

          </div>
        </div>
      </nav>
    </>
  );
}