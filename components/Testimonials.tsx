
import React from 'react';

const scientificInsights = [
  {
    category: "SEGURIDAD CLÍNICA",
    title: "La Piel como Espejo Sistémico",
    text: "La evidencia actual en dermatología funcional demuestra que la piel no es un órgano aislado. Ignorar el entorno metabólico (insulina, cortisol, redox) es gestionar solo el 50% de la respuesta estética del paciente.",
    source: "Basado en el Consenso de Medicina Funcional 2024"
  },
  {
    category: "RESULTADOS",
    title: "La Biología del Terreno Celular",
    text: "Ningún inyectable o tecnología de energía puede compensar un terreno biológico inflamado. La prehabilitación metabólica reduce el riesgo de PIH y optimiza la neocolagénesis de forma medible.",
    source: "Enfoque en Medicina de Precisión y Longevidad"
  },
  {
    category: "INNOVACIÓN",
    title: "Control del Inflamm-aging",
    text: "El abordaje del envejecimiento desde la epigenética permite al profesional estético pasar de la corrección temporal a la modulación biológica real. Es el nuevo estándar de la práctica avanzada.",
    source: "Visión Académica del Programa"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="pt-24 pb-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">El Respaldo del Paradigma Funcional</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Por qué la medicina estética de vanguardia está migrando hacia un abordaje sistémico basado en sistemas biológicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scientificInsights.map((insight, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6">
                <span className="text-[10px] font-black text-brand-primary bg-brand-primary/5 px-3 py-1.5 rounded-full tracking-widest uppercase">
                  {insight.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                {insight.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 italic flex-grow">
                "{insight.text}"
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {insight.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-medium">
            Usted no solo está adquiriendo un curso, está integrando un <span className="text-brand-primary font-bold">estándar de rigor científico</span> en su consulta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
