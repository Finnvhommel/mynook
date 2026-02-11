import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Deze regel toevoegen
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/"> {/* Voeg basename="/" toe */}
      <App />
    </BrowserRouter>
  </StrictMode>
);