
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
    answer: "Se obtiene exclusivamente al aprobar el test final del módulo con una calificación mínima del 80%."
  },
  {
    question: "¿Hay tutoría personalizada?",
    answer: "No se ofrecen tutorías personalizadas individuales. Sin embargo, las dudas se evacúan a través de un canal y un grupo de WhatsApp activo durante el mes del módulo, además de la sesión en vivo dedicada exclusivamente a Q&A clínico al finalizar cada bloque."
  },
  {
    question: "¿Cómo funciona el soporte durante el módulo?",
    answer: "El soporte durante el módulo se brinda principalmente a través de un espacio exclusivo de WhatsApp para alumnos, donde podés enviar tus dudas y recibir respuestas dentro de tiempos definidos por el equipo docente. Para consultas que requieran mayor contexto o detalle, utilizaremos un Google Form que permite ordenar la información y responder de manera más precisa. Las respuestas relevantes se consolidarán en una sección de Preguntas Frecuentes del módulo para beneficio de todos."
  },
  {
    question: "¿Aceptan pagos internacionales?",
    answer: "Sí, procesamos pagos vía PayPal, aceptando la mayoría de tarjetas de crédito y débito internacionales."
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
