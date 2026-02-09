import { Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-ink/10 bg-paper">
      <div className="max-w-6xl mx-auto">
        
        {/* Bovenste deel: De Definitie (Nu bovenin de footer) */}
        <div className="flex flex-col items-start text-left opacity-80 hover:opacity-100 transition-opacity mb-16">
          <div className="flex flex-wrap items-baseline gap-4 border-b border-ink/20 pb-2 mb-4 w-fit">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink tracking-tight">
              nook
            </h2>
            <p className="font-serif italic text-sm text-ink/60">
              [noek] zn.
            </p>
          </div>
          
          <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-xl">
            een kleine ruimte of hoekje, met name een die rust en geborgenheid biedt.
          </p>
        </div>

        {/* Onderste deel: Copyright & Socials (Met een subtiele scheidingslijn) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-ink/5">
          
          <p className="font-sans text-ink/40 text-xs tracking-wider uppercase">
            © 2026 MyNookApp
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/mynookappnl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/60 hover:text-gold transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/mynookapp" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/60 hover:text-gold transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;