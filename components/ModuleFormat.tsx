
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
                <p className="text-slate-600 leading-relaxed">
                  Tres clases online en vivo de 2 horas, orientadas a construir criterio clínico integrando Medicina Metabólica-Funcional con Estética. Se presentan fundamentos con respaldo científico y bibliografía curada, priorizando claridad conceptual y aplicabilidad. Cada clase se apoya en una guía visual estructurada (mapas, esquemas y modelos de interpretación) para conectar mecanismos sistémicos con signos estéticos y prioridades, facilitando decisiones seguras, coherentes y medibles en el paciente estético.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">02</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Semana 4: Integración Clínica</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sesión online en vivo de Q&A (90–120 min) para profundizar e integrar los conceptos del programa, aclarar dudas y afinar criterios de aplicación. Se consolidan marcos teóricos y su traducción práctica a la consulta estética, con foco en priorización, seguridad y medición de resultados desde el enfoque metabólico-funcional.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Entregables por módulo</h4>
                <ul className="text-sm text-slate-600 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Microlecturas PDF</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Audiolecturas MP3</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Papers científicos usados en el módulo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Planillas para uso en clínica</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Auto-test breve (opcional) con resultado</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Evaluación del módulo (Obligatoria)</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Contenido:</strong> Examen integral de las 3 clases del módulo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Estructura:</strong> Evaluación de 10 ítems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Requisito:</strong> Aprobación ≥80%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Plazo:</strong> Vence 7 días después de finalizar el bloque teórico.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Recibirán resultados y feedback detallado del examen del módulo vía email.</span>
                  </li>
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
