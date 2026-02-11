import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Router imports
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Mission from './pages/Mission';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();

  // 1. Umami Tracking & Scroll Reset bij elke URL-wissel
  useEffect(() => {
    // Scroll naar boven
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Stuur pageview naar Umami
    if (window.umami) {
      window.umami.track((props) => ({ 
        ...props, 
        url: location.pathname, 
        title: document.title 
      }));
    }
  }, [location]);

  return (
    <div className="bg-paper min-h-screen relative overflow-x-hidden">
      
      {/* Film Grain Laag */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      ></div>

      <div className="relative z-10">
        {/* Navbar staat altijd in beeld */}
        <Navbar />
        
        <main>
          {/* Hier bepaalt de Router wat er getoond wordt op basis van de URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}

export default App;