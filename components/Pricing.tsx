
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const Pricing: React.FC = () => {
  const handlePricingSelect = (plan: string) => {
    trackEvent('pricing_select', { plan });
    window.location.href = CONFIG.PAYMENT_URL_PRIMARY;
  };

  return (
    <section id="precios" className="py-24 bg-white scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Inversión en Excelencia Clínica</h2>
          <p className="mt-4 text-slate-600">Seleccione la modalidad que mejor se adapte a sus necesidades.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pago Único */}
          <div className="border-2 border-brand-primary p-8 rounded-2xl relative flex flex-col">
            <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pago Único</h3>
            <p className="text-sm text-slate-500 mb-6">Acceso inmediato y ahorro directo</p>
            <div className="text-4xl font-bold text-brand-primary mb-8">$[PRECIO] <span className="text-lg font-normal text-slate-500">USD</span></div>
            <ul className="text-sm text-slate-600 space-y-4 mb-8 flex-grow">
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg> Certificación Profesional</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg> Acceso a todas las clases en vivo</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg> Pack completo de SOPs y Bonos</li>
            </ul>
            <button
              onClick={() => handlePricingSelect('full_payment')}
              className="w-full py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-accent transition-colors"
            >
              Matricularme Ahora
            </button>
          </div>

          {/* Fraccionado */}
          <div className="border border-slate-200 p-8 rounded-2xl flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pago Fraccionado</h3>
            <p className="text-sm text-slate-500 mb-6">Flexibilidad de pago en cuotas</p>
            <div className="text-4xl font-bold text-slate-900 mb-2">2x $[CUOTA] <span className="text-lg font-normal text-slate-500">USD</span></div>
            <p className="text-xs text-slate-400 mb-8">Pago mensual automático</p>
            <ul className="text-sm text-slate-600 space-y-4 mb-8 flex-grow">
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg> Certificación Profesional</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg> Acceso a clases en vivo</li>
            </ul>
            <button
              onClick={() => handlePricingSelect('split_payment')}
              className="w-full py-4 border border-brand-primary text-brand-primary font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Seleccionar Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
