
import React from 'react';
import { CONFIG } from '../constants';
import { trackEvent } from '../services/tracking';

interface Module {
  number: number;
  title: string;
  objective: string;
  items: string[];
}

const modules: Module[] = [
  {
    number: 1,
    title: "Fundamentos de Estética Funcional, Epigenética e “Inflamm-aging”",
    objective: "Comprender la piel como órgano diana de procesos metabólicos y epigenéticos.",
    items: ["Paradigma funcional", "Ejes sistémicos (endocrino-metabólico, neuro-inmune, redox)", "Epigenética del envejecimiento cutáneo", "Inflamm-aging"]
  },
  {
    number: 2,
    title: "Eje Metabólico-Cutáneo: Insulina, IGF-1, mTOR y Glicación (AGEs)",
    objective: "Relacionar resistencia a la insulina, IGF-1 y mTOR con acné, fotoenvejecimiento y laxitud.",
    items: ["Carga/índice glucémico", "AGEs dietarios y por técnicas de cocción", "Colágeno/elastina", "Matriz extracelular"]
  },
  {
    number: 3,
    title: "Microbiota-Piel y Eje Intestino-Cerebro-Piel",
    objective: "Integrar disbiosis, permeabilidad intestinal y neuroinflamación con acné, rosácea y dermatitis.",
    items: ["Patrones clínicos de disbiosis", "Triggers dietarios", "Probióticos/prebióticos", "Herramientas de cribado"]
  },
  {
    number: 4,
    title: "Estrés Oxidativo, Mitocondria y Redox en Envejecimiento Cutáneo",
    objective: "Optimizar bioenergética y defensa antioxidante para sostener reparación tisular.",
    items: ["Sistemas Nrf2/Keap1", "Glutatión, CoQ10, ALA, polifenoles", "Relación con fotodaño", "Cicatrización"]
  },
  {
    number: 5,
    title: "Endocrinología Estética Clínica",
    objective: "Reconocer el impacto de HPA (cortisol), tiroides y esteroideas sexuales en piel y cabello.",
    items: ["Lectura clínica de analíticas funcionales", "Criterios y límites", "PCOS", "Perimenopausia/menopausia"]
  },
  {
    number: 6,
    title: "Evaluación Funcional Mínimo Viable y Seguridad",
    objective: "Definir el set de laboratorio e historia clínica necesarios para decisiones estéticas seguras.",
    items: ["Glucemia/insulina (HOMA-IR)", "Perfil lipídico, Vitamina D, Ferritina", "Fármacos/suplementos de riesgo", "Documentación técnica"]
  },
  {
    number: 7,
    title: "Nutrición Clínica Estética y Suplementación",
    objective: "Traducir evidencia en planes concretos que mejoren textura, firmeza y fotoprotección.",
    items: ["Proteína y aminoácidos", "Omega-3 selectivo", "Colágeno oral (tipos y dosis)", "Fotoprotección sistémica selectiva"]
  },
  {
    number: 8,
    title: "Protocolos: Acné Adulto y Rosácea",
    objective: "Implementar rutas terapéuticas integradas y medibles.",
    items: ["Acné con/sin IR o PCOS", "Lácteos y carga glucémica", "Rosácea flushing-dominante", "Coordinación dermatológica"]
  },
  {
    number: 9,
    title: "Protocolos: Hiperpigmentación y Fotoenvejecimiento",
    objective: "Sinergizar fotoprotección, antioxidantes y energía con tópicos/procedimientos.",
    items: ["Prevención de PIH", "Manejo del estrés oxidativo", "Control de AGEs", "Coordinación con láser/peelings"]
  },
  {
    number: 10,
    title: "Protocolos: Celulitis, Composición y Alopecias",
    objective: "Alinear metabolismo, microcirculación y tejido conectivo; sostener anágena.",
    items: ["Relación con síndrome metabólico", "Soporte proteico-micronutricional", "Ferritina y Vitamina D en efluvios", "AGA-FPHL"]
  },
  {
    number: 11,
    title: "Prehabilitación y Recuperación Peri-Procedimiento",
    objective: "Reducir edema, dolor, riesgo de PIH y optimizar neocolagénesis.",
    items: ["Hidratación y proteína", "Vitamina C y Zinc peri-quirúrgico", "Suspensión de fármacos de riesgo", "Educación del paciente"]
  },
  {
    number: 12,
    title: "Implementación, KPIs y Auditoría de Resultados",
    objective: "Asegurar transferibilidad y calidad asistencial en la práctica diaria.",
    items: ["Flujos de trabajo", "Registro fotográfico estandarizado", "Métricas clínicas/estéticas", "Comunicación interprofesional"]
  }
];

const Syllabus: React.FC = () => {
  const handleBuyModule = (moduleNumber: number) => {
    trackEvent('module_buy_click', { module: moduleNumber });
    const element = document.getElementById('precios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contenido" className="py-24 bg-slate-50 scroll-mt-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Programa Académico Integral</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Una estructura de 12 módulos diseñada para el dominio profundo de la medicina metabólica aplicada a la estética clínica avanzada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((mod) => (
            <div key={mod.number} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 bg-brand-primary/5 px-3 py-1 rounded-full">
                    Módulo {mod.number.toString().padStart(2, '0')}
                  </span>
                  {mod.number === 1 && (
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                      Inicio 8 Julio 2026
                    </span>
                  )}
                </div>
                <div className={`w-2 h-2 rounded-full ${mod.number === 1 ? 'bg-green-400 animate-pulse' : 'bg-brand-accent/30'}`}></div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-primary transition-colors">
                {mod.title}
              </h3>
              
              <div className="mb-6 p-4 bg-slate-50 rounded-xl border-l-4 border-brand-accent/20">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Objetivo:</p>
                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                  "{mod.objective}"
                </p>
              </div>

              <div className="flex-grow">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">Contenidos Clave:</p>
                <ul className="space-y-2.5">
                  {mod.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start">
                      <svg className="w-4 h-4 mr-2.5 text-brand-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones solicitados */}
              <div className="mt-8">
                {mod.number === 1 ? (
                  <button
                    onClick={() => handleBuyModule(mod.number)}
                    className="w-full py-4 bg-brand-primary text-white font-black rounded-xl hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/10 active:scale-[0.97] transform uppercase tracking-widest text-sm"
                  >
                    COMPRAR
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed uppercase tracking-widest text-[10px] border border-slate-200"
                  >
                    PRÓXIMAMENTE
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
