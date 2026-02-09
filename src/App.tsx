import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Mission from './pages/Mission';
import Navbar from './components/Navbar';

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
    // AANPASSING: 'overflow-x-hidden' toegevoegd.
    // Dit zorgt ervoor dat je op mobiel niet meer naar rechts kunt scrollen
    // als er toevallig een gloed of animatie buiten beeld valt.
    <div className="bg-paper min-h-screen relative overflow-x-hidden">
      
      {/* 1. DE FILM GRAIN LAAG */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>

      {/* 2. DE CONTENT WRAPPER */}
      <div className="relative z-10">
        <Navbar onNavigate={handleNavigate} />
        
        <main>
          {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
          {currentPage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
          {currentPage === 'mission' && <Mission onNavigate={handleNavigate} />}
        </main>
      </div>

    </div>
  );
}

export default App;