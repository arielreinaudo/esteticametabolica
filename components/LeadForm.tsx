
import React, { useState } from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const LeadForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Netlify Forms Submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      trackEvent('lead_submitted', { specialty: data.especialidad });
      
      // Optional Webhook
      if (CONFIG.WEBHOOK_URL) {
        try {
          await fetch(CONFIG.WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify(data),
          });
        } catch (e) { console.error("Webhook failed", e); }
      }

      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="inscripcion" className="py-20 bg-brand-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <h3 className="text-2xl font-bold mb-2">Solicitud Enviada con Éxito</h3>
            <p className="text-slate-600 mb-6">Un asesor académico se pondrá en contacto con usted en las próximas 24 h laborables para formalizar su plaza.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-brand-primary font-bold hover:underline"
            >
              Volver al formulario
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscripcion" className="py-24 bg-slate-900 text-white scroll-mt-header">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Inicie su proceso de inscripción</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Complete el formulario para recibir el dossier informativo y coordinar una entrevista de admisión.</p>
        </div>

        <form 
          name="lead" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-12 rounded-[2rem] text-slate-900 shadow-2xl"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="lead" />
          <p className="hidden"><label>Don't fill this out if you're human: <input name="bot-field" /></label></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">Nombre</label>
              <input 
                type="text" 
                name="nombre" 
                required 
                placeholder="Ej. Silvina"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">Apellido</label>
              <input 
                type="text" 
                name="apellido" 
                required 
                placeholder="Ej. Tazzo"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">Email Profesional</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="email@institucion.com"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">País de Ejercicio</label>
              <input 
                type="text" 
                name="pais" 
                required 
                placeholder="Ej. España, México..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">Especialidad Clínica</label>
              <input 
                type="text" 
                name="especialidad" 
                required 
                placeholder="Ej. Dermatología, Medicina Estética, Cirugía Plástica..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2.5 ml-1">Mensaje o Consultas (Opcional)</label>
              <textarea 
                name="mensaje" 
                rows={3}
                placeholder="¿Tiene alguna duda técnica sobre el programa?"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all resize-none placeholder:text-slate-300"
              ></textarea>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="flex items-center h-5">
              <input type="checkbox" name="novedades" id="novedades" className="w-4 h-4 text-brand-primary border-slate-300 rounded focus:ring-brand-primary accent-brand-primary cursor-pointer" />
            </div>
            <label htmlFor="novedades" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
              Deseo recibir actualizaciones sobre nueva evidencia científica, seminarios web gratuitos y próximas cohortes académicas.
            </label>
          </div>

          <div className="mt-10">
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-5 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent shadow-xl shadow-brand-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base tracking-wide"
            >
              {status === 'loading' ? 'Procesando solicitud...' : 'Enviar Solicitud de Admisión'}
            </button>
            {status === 'error' && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg text-center border border-red-100">
                Hubo un error al procesar su solicitud. Por favor, reintente o contacte a <strong>{CONFIG.SUPPORT_EMAIL}</strong>
              </div>
            )}
          </div>
        </form>
        
        <p className="mt-8 text-center text-xs text-slate-500 font-medium">
          Sus datos están protegidos bajo estricto cumplimiento del GDPR.
        </p>
      </div>
    </section>
  );
};

export default LeadForm;
