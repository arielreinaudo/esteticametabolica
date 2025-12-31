
import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>
        <div className="prose prose-slate text-slate-600 space-y-6">
          <h2 className="text-xl font-bold text-slate-900 mt-8">1. Objeto</h2>
          <p>Los presentes términos regulan la inscripción y participación en el curso "Medicina Metabólica y Funcional aplicada a la Estética".</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">2. Propiedad Intelectual</h2>
          <p>Todo el material docente (videos, guías, SOPs) es propiedad intelectual de [NOMBRE ORGANIZACIÓN]. Su distribución no autorizada conlleva acciones legales.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">3. Política de Devoluciones</h2>
          <p>Se rige por la Garantía Profesional detallada en la página principal: ventana de 24 h post-Clase 1 bajo cumplimiento de asistencia y evaluación.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">4. Uso de la Información</h2>
          <p>El alumno asume que el contenido es educativo y la aplicación clínica queda bajo su entera responsabilidad profesional.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
