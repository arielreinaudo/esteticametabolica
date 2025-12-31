
import React from 'react';

const profiles = [
  "Médicos Especialistas en Medicina Estética",
  "Dermatólogos",
  "Cirujanos Plásticos",
  "Médicos de Familia con interés en Longevidad",
  "Nutricionistas Clínicos orientados a Estética",
  "Profesionales de Salud interesados en Evidencia Metabólica"
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Dirigido a Profesionales de la Salud</h2>
          <p className="mt-4 text-slate-200 opacity-90">Formación exclusiva para perfiles con base clínica.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center">
              <div className="w-2 h-2 bg-brand-accent rounded-full mr-4"></div>
              <span className="font-medium">{profile}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
