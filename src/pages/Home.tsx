import Hero from '../components/Hero';
import Availability from '../components/Availability';
import Features from '../components/Features';
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
      <Availability />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;