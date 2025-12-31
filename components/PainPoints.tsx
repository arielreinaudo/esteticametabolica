
import React from 'react';

const painPoints = [
  {
    title: "Mesetas en resultados",
    description: "Supere el estancamiento clínico optimizando la biología celular subyacente del paciente mediante protocolos de medicina funcional.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Complicaciones frecuentes",
    description: "Reduzca eventos adversos y tiempos de recuperación mediante una preparación metabólica sistémica pre-procedimiento.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Baja adherencia",
    description: "Implemente guías claras y SOPs que involucren al paciente en su propio proceso de recuperación y salud a largo plazo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Diagnóstico incompleto",
    description: "Integre parámetros de laboratorio avanzado para una visión funcional del envejecimiento y el inflamm-aging.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.387a2 2 0 01-1.132.252l-4-.39a2 2 0 00-1.497.738l-2.494 3.03a1 1 0 01-1.378.131l-1.483-1.109a1 1 0 01-.132-1.379l2.494-3.03a2 2 0 00.382-1.428l-.39-4a2 2 0 01.252-1.132l.387-.691a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L6.3 3.6a2 2 0 01.218-3.024A2 2 0 018.6 1.4l1.428 1.428z" />
      </svg>
    )
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Desafíos de la Estética Convencional</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Identificamos los puntos críticos donde la medicina convencional requiere una integración funcional para alcanzar el siguiente nivel de excelencia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-brand-primary transition-colors"></div>
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
