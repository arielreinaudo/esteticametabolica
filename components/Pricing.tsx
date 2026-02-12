
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const Pricing: React.FC = () => {
  const handlePricingSelect = (plan: string) => {
    trackEvent('pricing_select', { plan });
    window.location.href = CONFIG.PAYMENT_URL_PRIMARY;
  };

  const benefits = [
    "Acceso a la clase en vivo del módulo",
    "Acceso a la grabación del módulo",
    "Material visual descargable (mapas y esquemas)",
    "SOPs del módulo (procedimientos estandarizados)",
    "Checklists clínicos del módulo (consulta y seguimiento)",
    "Guías de evaluación y priorización de hipótesis",
    "Protocolos aplicables a consulta estética",
    "Guías para comunicación y adherencia del paciente",
    "Acceso a comunidad profesional del programa",
    "Soporte por WhatsApp durante el mes",
    "Certificado del módulo"
  ];

  return (
    <section id="precios" className="py-24 bg-white scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Inversión en Excelencia Clínica</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Acceda a la formación más completa en medicina metabólica aplicada con un plan de pago diseñado para su crecimiento profesional.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-2 border-brand-primary p-8 sm:p-12 rounded-[2.5rem] relative shadow-2xl shadow-brand-primary/10 transition-transform hover:scale-[1.02] duration-300">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
              Inscripción Oro
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Inversión</h3>
            <p className="text-slate-500 font-medium mb-10">Acceso completo al módulo y recursos exclusivos</p>
            
            <div className="flex items-center justify-center gap-2 mb-10">
              <span className="text-5xl sm:text-6xl font-black text-brand-primary tracking-tighter">450</span>
              <div className="text-left">
                <p className="text-xl font-bold text-brand-primary leading-none">USD</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Iva incluido</p>
              </div>
            </div>

            <div className="space-y-3.5 mb-12 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start text-slate-700 font-semibold text-sm leading-tight">
                  <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handlePricingSelect('full_payment_450')}
              className="w-full py-5 bg-brand-primary text-white text-lg font-black rounded-2xl hover:bg-brand-accent shadow-xl shadow-brand-primary/20 transition-all duration-300 transform active:scale-95"
            >
              Matricularme Ahora
            </button>
            
            <p className="mt-6 text-xs text-slate-400 font-medium">
              Pago seguro procesado vía PayPal &copy;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
