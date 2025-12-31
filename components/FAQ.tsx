
import React, { useState } from 'react';
import { trackEvent } from '../services/tracking';

const faqs = [
  {
    question: "¿Es necesario tener conocimientos previos en medicina funcional?",
    answer: "No. El programa inicia desde las bases moleculares para asegurar que todos los profesionales nivelan conocimientos en el Módulo 1."
  },
  {
    question: "¿Las clases quedan grabadas?",
    answer: "Sí, todas las sesiones en vivo quedan grabadas y disponibles en el campus virtual durante 6 meses tras finalizar el curso."
  },
  {
    question: "¿Cómo se obtiene la certificación?",
    answer: "Se requiere la aprobación de las evaluaciones post-clase y una asistencia mínima del 75% a las sesiones sincrónicas o visionado de diferidos."
  },
  {
    question: "¿Hay tutoría personalizada?",
    answer: "Contamos con un canal de soporte vía email y una sesión dedicada exclusivamente a Q&A clínico al finalizar cada módulo."
  },
  {
    question: "¿Aceptan pagos internacionales?",
    answer: "Sí, procesamos pagos vía Stripe, aceptando la mayoría de tarjetas de crédito y débito internacionales."
  },
  {
    question: "¿El material es descargable?",
    answer: "Las guías, SOPs y PDFs de lectura son 100% descargables. Los videos solo pueden visionarse en la plataforma."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIndex !== idx) {
      trackEvent('faq_open', { question_index: idx });
      setOpenIndex(idx);
    } else {
      setOpenIndex(null);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 scroll-mt-header">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
