import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-12 px-6 border-t border-ink/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <p className="font-sans text-ink/60 text-sm">
            © 2026 MyNookApp
          </p>
          <button
            onClick={() => onNavigate('privacy')}
            className="font-sans text-ink/60 text-sm hover:text-gold transition-colors duration-200 underline underline-offset-4"
          >
            Privacybeleid
          </button>
        </div>

        <div className="flex justify-center gap-6 pt-4 border-t border-ink/10">
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
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/60 hover:text-gold transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;