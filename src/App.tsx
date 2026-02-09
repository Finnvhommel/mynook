import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Mission from './pages/Mission';
import Navbar from './components/Navbar'; // Zorg dat dit bestand bestaat in src/components/

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'privacy') setCurrentPage('privacy');
    if (hash === 'mission') setCurrentPage('mission');
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', page === 'home' ? '/' : `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // We voegen bg-paper toe aan de wrapper om te zorgen dat de hele site 
    // dezelfde crème-kleur heeft, ook achter de transparante navbar.
    <div className="bg-paper min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      
      {/* AANPASSING: pt-20 is verwijderd. De content begint nu bovenaan het scherm. */}
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
        {currentPage === 'mission' && <Mission onNavigate={handleNavigate} />}
      </main>
    </div>
  );
}

export default App;