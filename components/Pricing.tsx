
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

interface PricingPlan {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  condition?: string;
  features: string[];
  ctaText: string;
  highlight?: boolean;
  paymentUrl: string;
}

const plans: PricingPlan[] = [
  {
    id: 'plan_modulo',
    badge: 'INSCRIPCIÓN POR MÓDULO',
    title: 'Inversión',
    subtitle: 'Acceso completo al módulo y recursos exclusivos',
    price: '320',
    condition: 'Pago único por módulo',
    paymentUrl: CONFIG.PAYMENT_URL_ORO,
    features: [
      "Acceso a las clases en vivo del módulo (3 + Q&A)",
      "Acceso a la grabaciones del módulo (3 + Q&A)",
      "SOPs del módulo (procedimientos estandarizados)",
      "Checklists clínicos del módulo (consulta y seguimiento)",
      "Guías de evaluación y priorización de hipótesis",
      "Protocolos aplicables a consulta estética",
      "Guías para comunicación y adherencia del paciente",
      "Acceso a comunidad profesional del programa",
      "Soporte por WhatsApp durante el mes",
      "Certificado del módulo"
    ],
    ctaText: 'Comprar',
    highlight: true
  }
];

const Pricing: React.FC = () => {
  const handlePricingSelect = (plan: PricingPlan) => {
    trackEvent('pricing_select', { plan: plan.id });
    window.location.href = plan.paymentUrl;
  };

  return (
    <section id="precios" className="py-24 bg-slate-50 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Planes de Inversión</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Acceda a la formación líder en medicina estética metabólica con nuestra modalidad de pago por módulo.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white border-2 rounded-[2.5rem] p-8 flex flex-col h-full transition-all duration-300 hover:shadow-2xl ${
                plan.highlight 
                ? 'border-brand-primary shadow-xl shadow-brand-primary/10 relative z-10' 
                : 'border-slate-200 shadow-sm hover:border-brand-primary/30'
              }`}
            >
              <div className="text-center mb-8">
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 ${
                  plan.highlight ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {plan.badge}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.title}</h3>
                <p className="text-slate-500 text-xs font-medium mb-6 px-4">{plan.subtitle}</p>
                
                <div className="flex flex-col items-center justify-center min-h-[100px]">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-slate-400 line-through text-lg font-bold">
                        {plan.originalPrice} USD
                      </span>
                      {plan.savings && (
                        <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-brand-primary tracking-tighter">{plan.price}</span>
                    <span className="text-lg font-bold text-brand-primary uppercase">USD</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Iva incluido</p>
                </div>

                {plan.condition && (
                  <p className="mt-4 text-xs font-semibold text-slate-600 italic bg-slate-50 py-2 px-4 rounded-lg inline-block">
                    {plan.condition}
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-10 text-left flex-grow bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start text-slate-700 font-semibold text-xs leading-tight">
                    <svg className="w-4 h-4 mr-3 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 text-center">
                <button
                  onClick={() => handlePricingSelect(plan)}
                  className={`w-full py-4 px-6 rounded-2xl text-sm font-black transition-all duration-300 transform active:scale-95 shadow-lg ${
                    plan.highlight
                    ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-brand-primary/20'
                    : 'bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white shadow-brand-primary/10'
                  }`}
                >
                  {plan.ctaText}
                </button>
                <p className="mt-4 text-[10px] text-slate-400 font-medium">
                  Pago seguro procesado vía PayPal &copy;
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            * Al seleccionar cualquier plan, será redirigido a nuestro portal de inscripción segura. Si requiere una factura corporativa o tiene dudas sobre los métodos de pago, por favor contáctenos a través de los canales de soporte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
