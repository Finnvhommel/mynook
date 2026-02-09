import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import FAQ from '../components/FAQ';
import Availability from '../components/Availability'; // <--- Vergeet deze import niet!
import Contact from '../components/Contact';
import Footer from '../components/Footer';

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-paper min-h-screen relative overflow-hidden">
      <Hero />
      <Features />
      <Showcase />
      <FAQ />
      
      {/* Hier voegen we de knoppen toe (bijvoorbeeld voor de footer of contact) */}
      <Availability />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;