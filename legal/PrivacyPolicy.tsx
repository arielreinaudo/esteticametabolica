
import React from 'react';
import { CONFIG } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
        <div className="prose prose-slate text-slate-600 space-y-6">
          <p>En cumplimiento con la normativa vigente de protección de datos personales (GDPR y equivalentes locales), le informamos que sus datos serán tratados con la finalidad de gestionar su pre-inscripción y enviarle información académica relevante.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">1. Responsable del Tratamiento</h2>
          <p>[NOMBRE ORGANIZACIÓN], con domicilio en [DIRECCIÓN FISCAL] y correo de contacto {CONFIG.SUPPORT_EMAIL}.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">2. Finalidad</h2>
          <p>Los datos recogidos mediante el formulario de "lead" se utilizan exclusivamente para la comunicación comercial académica y la gestión del curso.</p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">3. Sus Derechos</h2>
          <p>Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad enviando un correo electrónico a nuestro departamento de soporte.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
