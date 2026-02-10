
import React from 'react';

const ModuleFormat: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 bg-white border-b border-slate-100 scroll-mt-header">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Formato General de cada Módulo (4 semanas)</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">01</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Semanas 1–3: Aprendizaje Guiado</h3>
                <p className="text-slate-600">Tres clases online en vivo de 2 h cada una, con práctica guiada integrada para consolidar conceptos en tiempo real.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">02</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Semana 4: Integración Clínica</h3>
                <p className="text-slate-600">Sesión online en vivo de Q&A clínico e integración de casos complejos (90–120 min).</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Entregables por semana</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                    Microlectura (1–2 págs.)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                    Audiolectura
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-brand-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                    Auto-test breve (opcional, 3–5 ítems)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Evaluación del módulo (Obligatoria)</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li><strong>Contenido:</strong> Examen integral de las 3 clases del módulo.</li>
                  <li><strong>Estructura:</strong> Evaluación de 10 ítems.</li>
                  <li><strong>Requisito:</strong> Aprobación ≥80%.</li>
                  <li><strong>Plazo:</strong> Vence 7 días después de finalizar el bloque teórico.</li>
                  <li>Recibirán resultados y feedback detallado del examen del módulo vía email.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleFormat;
