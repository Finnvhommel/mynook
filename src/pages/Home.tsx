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
    <div className="bg-paper min-h-screen relative overflow-hidden">
      {/* De Hero bevat intern al de Availability knoppen */}
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