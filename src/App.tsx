import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'privacy') {
      setCurrentPage('privacy');
    }
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
    </>
  );
}

export default App;
