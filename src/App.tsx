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
    <>
      <Navbar onNavigate={handleNavigate} />
      <main className="pt-20"> {/* Iets meer ruimte voor de ademruimte van je Hero */}
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
        {currentPage === 'mission' && <Mission onNavigate={handleNavigate} />}
      </main>
    </>
  );
}

export default App;