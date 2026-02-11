import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Gebruik Link ipv button
import { Menu, X } from 'lucide-react';

export default function Navbar() { // Geen props meer nodig!
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Om te zien waar we nu zijn

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/mission', label: 'Onze Missie' },
    { path: '/privacy', label: 'Privacy' },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
        ${isOpen ? 'bg-paper' : 'bg-paper/80 backdrop-blur-md border-b border-ink/5'}
      `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          {/* Logo is nu een Link */}
          <Link 
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-['Racing_Sans_One'] text-2xl text-ink tracking-wide relative z-50 transition-transform hover:scale-105"
          >
            MyNook
          </Link>

          {/* Toggle Button */}
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
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${isOpen ? index * 100 + 100 : 0}ms` }}
                className={`
                  font-['Racing_Sans_One'] text-4xl hover:text-gold transition-all duration-500
                  ${location.pathname === link.path ? 'text-gold' : 'text-ink'}
                  ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                {link.label}
              </Link>
            ))}

            {/* Android & iOS knoppen blijven hetzelfde als in je vorige versie... */}
            {/* (Voeg die hier toe zoals in de vorige stap) */}
             <a
              href="https://tally.so/r/Pd59vd"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="Android Beta Click (Navbar)"
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

            <a
              href="https://tally.so/r/682KAO"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="iOS Waitlist Click (Navbar)"
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