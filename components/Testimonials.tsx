
import React from 'react';

const testimonials = [
  {
    name: "Dr. Roberto M.",
    role: "Médico Estético",
    text: "La integración del laboratorio funcional ha cambiado por completo la forma en que preparo a mis pacientes para procedimientos invasivos. Mayor seguridad y mejores resultados."
  },
  {
    name: "Dra. Elena S.",
    role: "Dermatóloga",
    text: "Por fin un curso que no solo habla de técnicas inyectables, sino de la biología sistémica que las sustenta. Evidencia sólida y aplicable."
  },
  {
    name: "Dr. Carlos L.",
    role: "Cirujano Plástico",
    text: "El concepto de periodización metabólica es clave. Mis pacientes recuperan mucho mejor y la satisfacción ha subido notablemente."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Confianza de la Comunidad Médica</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 italic text-slate-600 relative">
              <span className="text-4xl text-slate-200 absolute top-4 left-4 font-serif">“</span>
              <p className="mb-6 relative z-10">{t.text}</p>
              <div className="not-italic">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
