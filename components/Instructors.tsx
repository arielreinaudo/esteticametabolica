
import React from 'react';

// Para cambiar las fotos, simplemente reemplaza los valores de 'image' a continuación.
// Se ha configurado el enlace de Dropbox con raw=1 para asegurar la carga directa de la imagen.
const instructors = [
  {
    name: "Dra. Silvina Tazzo",
    specialty: "Especialista en Medicina Estética y Abordaje Metabólico",
    bio: "Referente en la integración de la fisiopatología sistémica aplicada al rejuvenecimiento no invasivo. Con amplia trayectoria en la transferencia de evidencia científica a la práctica clínica estética diaria.",
    image: "https://picsum.photos/seed/tazzo/400/400"
  },
  {
    name: "Dra. Adriana Ortiz",
    specialty: "Especialista en Medicina Funcional y Nutrición Clínica",
    bio: "Experta en el manejo del eje neuroinmune-endocrino y su impacto en la salud dérmica. Dedicada a la formación de profesionales en protocolos de suplementación y diagnóstico funcional avanzado.",
    image: "https://www.dropbox.com/scl/fi/cxs7w2sk1cy1jfry799cu/2.png?rlkey=9rtfshipxgdfz8cc75y5imla1&raw=1" 
  }
];

const Instructors: React.FC = () => {
  return (
    <section id="docentes" className="py-24 bg-white scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Cuerpo Académico</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            El programa es liderado por especialistas con sólida formación científica y vasta experiencia en la aplicación clínica de la medicina metabólica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
          {instructors.map((doc, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-slate-100 rounded-full scale-95 group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback en caso de que la carga falle
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/400/400`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-primary text-white p-3 rounded-full shadow-lg border-4 border-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">{doc.name}</h3>
              <p className="text-xs sm:text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-6 px-4 py-1 bg-brand-primary/5 rounded-full inline-block">
                {doc.specialty}
              </p>
              <p className="text-slate-600 leading-relaxed font-medium text-base sm:text-lg max-w-md mx-auto italic">
                "{doc.bio}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base text-slate-500 italic leading-relaxed">
            Ambas docentes participan activamente en las sesiones de Q&A y en el diseño de los protocolos de intervención presentados en este curso, garantizando un enfoque multidisciplinar y coherente con la <strong>evidencia clínica actual</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
