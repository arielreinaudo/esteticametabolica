
import React from 'react';

const outcomes = [
  "Uso de semáforos clínicos para la toma de decisiones basada en riesgo.",
  "Interpretación de laboratorio funcional avanzado orientado a estética.",
  "Estrategias de periodización metabólica en tratamientos inyectables.",
  "Implementación de KPIs de recuperación dérmica y celular.",
  "Protocolos de suplementación clínica con base en evidencia PubMed/PMC.",
  "Diseño de SOPs avanzados para la seguridad del paciente.",
  "Manejo clínico del Inflamm-aging y estrés oxidativo sistémico.",
  "Integración de guías prácticas para el acompañamiento metabólico."
];

const Outcomes: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Competencias Clínicas de Alto Valor</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Este programa proporciona las herramientas tangibles para transformar su práctica mediante un enfoque basado en sistemas biológicos.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {outcomes.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/5 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                    <svg className="w-4 h-4 text-brand-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2 -z-10"></div>
            <div className="bg-white p-4 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden relative group">
                <img 
                  src="https://www.dropbox.com/scl/fi/ujmxc6vr11q2o9xn1qur8/estetica-x-site.jpg?rlkey=k30t8sfykhuqcqiip4xael49t&raw=1" 
                  alt="Textura dérmica y estética avanzada" 
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/clinica-prof/800/1000";
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-brand-primary/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold uppercase tracking-wider">Estándar Oro</p>
                        <p className="text-white/80 text-xs">Enfoque en Seguridad Clínica y Evidencia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm italic text-slate-400 text-center font-medium">
                *Toda la formación se apoya en revisiones sistemáticas PubMed y guías internacionales de consenso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
