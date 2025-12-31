
import React, { useState, useEffect } from 'react';
import { initGA } from '../services/tracking';

const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    } else if (consent === 'accepted') {
      initGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    initGA();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-[100] border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300 text-center md:text-left">
          Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar su experiencia de navegación.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setShow(false)} 
            className="text-xs font-bold hover:underline"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 bg-brand-primary text-white text-xs font-bold rounded-md hover:bg-brand-accent transition-all"
          >
            Aceptar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
