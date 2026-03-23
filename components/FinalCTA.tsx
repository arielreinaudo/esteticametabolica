
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const FinalCTA: React.FC = () => {
  const handleEnrollClick = () => {
    trackEvent('cta_final_click', { type: 'scroll_to_pricing' });
    const element = document.getElementById('precios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inscripcion" className="py-24 bg-slate-900 text-white scroll-mt-header relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight tracking-tight">
          ¿Listo para elevar su <br className="hidden sm:block" /> estándar de práctica clínica?
        </h2>
        <p className="text-slate-400 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Únase a la próxima cohorte y comience a implementar protocolos basados en evidencia metabólica que garantizan resultados consistentes y seguros.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={handleEnrollClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white text-xl font-black rounded-2xl hover:bg-brand-accent shadow-2xl shadow-brand-primary/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Ver Planes e Inscribirme</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Acceso Inmediato
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pago 100% Seguro
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
