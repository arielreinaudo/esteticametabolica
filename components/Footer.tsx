
import React from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">{CONFIG.BRAND_NAME}</h4>
            <p className="text-sm text-slate-500 max-w-sm">
              Formación avanzada basada en evidencia para la optimización metabólica de resultados estéticos.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h5 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link to="/privacidad" className="hover:text-brand-primary">Privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-brand-primary">Términos y Condiciones</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase text-slate-400 tracking-widest mb-4">Contacto</h5>
              <ul className="text-sm text-slate-600">
                <li>{CONFIG.SUPPORT_EMAIL}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-400 mb-4 italic">
            <strong>Disclaimer:</strong> Formación para profesionales. La implementación de cualquier protocolo debe ajustarse a la normativa local vigente y a los criterios clínicos de seguridad del profesional tratante. No sustituye el juicio médico individual.
          </p>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} [NOMBRE ORGANIZACIÓN]. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
