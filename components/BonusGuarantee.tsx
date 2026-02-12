
import React from 'react';

const bonuses = [
  "SOPs y checklists clínicos descargables",
  "Kit de guías de paciente con KPIs personalizados",
  "Banco de casos clínicos comentados (12 casos)",
  "Sesión extra de implementación práctica (60 min)",
  "Licencia de uso interno para infografías educativas"
];

const BonusGuarantee: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bonos */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-brand-accent/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              Recursos de Valor Añadido (Bonos)
            </h3>
            <ul className="space-y-4">
              {bonuses.map((bonus, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-brand-accent mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-2 0v1h2zm3 0V5a1 1 0 10-2 0v1h2z" clipRule="evenodd" /></svg>
                  {bonus}
                </li>
              ))}
            </ul>
          </div>

          {/* Garantía */}
          <div className="border border-slate-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Garantía Profesional</h3>
            <div className="text-slate-600 text-sm space-y-3">
              <p><strong>Ventana:</strong> Hasta 24 h posteriores a la Clase 1 del primer módulo.</p>
              <p><strong>Condición:</strong> Es requisito haber asistido a la clase en vivo (o visto la grabación completa).</p>
              <p><strong>Alternativa:</strong> En caso de no poder continuar por motivos de fuerza mayor, se permite un cambio de cohorte único sin costo adicional.</p>
              <p><strong>Exclusiones:</strong> La garantía queda anulada si el alumno ha descargado el pack completo de recursos o ha asistido a más de una clase en vivo.</p>
              <p><strong>Respuesta:</strong> Todas las solicitudes serán procesadas en un máximo de 72 h hábiles.</p>
            </div>
            <div className="mt-6 flex items-center text-brand-primary font-bold">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Compromiso de Calidad Académica
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusGuarantee;
