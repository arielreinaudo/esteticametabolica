
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const Hero: React.FC = () => {
  const handlePrimaryClick = () => {
    trackEvent('cta_hero_click', { type: 'enroll' });
    window.location.hash = 'precios';
  };

  const handleSecondaryClick = () => {
    trackEvent('cta_hero_click', { type: 'download_program' });
    window.open(CONFIG.PROGRAM_PDF_URL, '_blank');
  };

  return (
    <section id="hero" className="relative bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden medical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-5 text-brand-primary bg-brand-primary/5 border border-brand-primary/10 mb-8">
            <span className="mr-2">Nuevo Cohorte 2024</span>
            <span className="h-4 w-px bg-brand-primary/20 mr-2"></span>
            <span className="font-bold">Inscripciones Abiertas</span>
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl max-w-5xl mx-auto leading-[1.1]">
            Medicina Metabólica y Funcional aplicada a la <span className="text-brand-primary">Estética</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-slate-600 sm:text-xl leading-relaxed">
            Integra el eje metabólico–neuroinmune–redox para mejorar la seguridad clínica y la consistencia de resultados en su práctica avanzada.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <button
              onClick={handlePrimaryClick}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-primary hover:bg-brand-accent shadow-xl hover:shadow-brand-primary/20 transition-all duration-300"
            >
              Quiero inscribirme
            </button>
            <button
              onClick={handleSecondaryClick}
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300"
            >
              Descargar programa
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-slate-500 font-medium border-t border-slate-100 pt-8 sm:pt-10">
            <span className="flex items-center text-slate-700">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              </div>
              Evidencia científica rigorosa
            </span>
            <span className="flex items-center text-slate-700">
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
              </div>
              Transferencia clínica directa
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative medical elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-[0.03] pointer-events-none">
        <svg width="600" height="600" fill="currentColor" className="text-brand-primary" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M200 10v380M10 200h380" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
