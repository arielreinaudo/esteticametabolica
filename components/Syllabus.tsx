
import React from 'react';
import { trackEvent } from '../services/tracking';
import { CONFIG } from '../constants';

const modules = [
  {
    title: "Módulo 1: Fundamentos de Estética Funcional",
    items: ["Bases de Epigenética aplicada", "Mecanismos de Inflamm-aging", "Homeostasis redox dérmica"]
  },
  {
    title: "Módulo 2: Diagnóstico Funcional Avanzado",
    items: ["Historia clínica orientada a metabolismo", "Laboratorio mínimo viable", "Protocolo de Semáforos clínicos"]
  },
  {
    title: "Módulo 3: Protocolos de Intervención",
    items: ["Periodización de tratamientos", "Suplementación pre y post-quirúrgica", "Seguridad y KPIs de éxito"]
  }
];

const Syllabus: React.FC = () => {
  return (
    <section id="contenido" className="py-20 bg-slate-50 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Programa Académico</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Una estructura progresiva diseñada para el dominio de la medicina metabólica en estética.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-brand-primary mb-4">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              trackEvent('bonus_download', { file: 'full_syllabus' });
              window.open(CONFIG.PROGRAM_PDF_URL, '_blank');
            }}
            className="inline-flex items-center px-6 py-3 border border-brand-primary text-brand-primary font-medium rounded-md hover:bg-brand-primary hover:text-white transition-all"
          >
            Ver programa completo (PDF)
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
