import Hero from '../components/Hero';
// AANPASSING: Features is weg, HowItWorks is nieuw
import HowItWorks from '../components/HowItWorks';
import Showcase from '../components/Showcase';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-paper min-h-screen relative overflow-hidden">
      <Hero />
      
      {/* Hier stond eerst <Features />. Nu gebruiken we de tijdlijn: */}
      <HowItWorks />
      
      <Showcase />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;