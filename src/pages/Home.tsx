import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    // AANPASSING: We zorgen dat de achtergrond 'bg-paper' is en 
    // we halen eventuele 'pt-16' of 'border-t' weg die een balk kan veroorzaken.
    <div className="bg-paper min-h-screen relative overflow-hidden">
      {/* Geen extra div of padding hier boven de Hero */}
      <Hero />
      
      <Features />
      <Showcase />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;