import Hero from '../components/Hero';
import Availability from '../components/Availability';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingDust from '../components/FloatingDust';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-paper min-h-screen relative overflow-hidden">
      <FloatingDust />
      <Hero />
      <Availability />
      <Features />
      <FAQ />
      <Contact />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default Home;
