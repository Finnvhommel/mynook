import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Mission from './pages/Mission.tsx'; // 1. Importeer de pagina

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'privacy') setCurrentPage('privacy');
    if (hash === 'mission') setCurrentPage('mission'); // 2. Check de hash
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', page === 'home' ? '/' : `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
      {currentPage === 'mission' && <Mission onNavigate={handleNavigate} />} {/* 3. Toon de pagina */}
    </>
  );
}

export default App;