
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Outcomes from './components/Outcomes';
import TargetAudience from './components/TargetAudience';
import ModuleFormat from './components/ModuleFormat';
import Syllabus from './components/Syllabus';
import Instructors from './components/Instructors';
import BonusGuarantee from './components/BonusGuarantee';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './legal/PrivacyPolicy';
import TermsConditions from './legal/TermsConditions';

const MainLanding: React.FC = () => {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Outcomes />
      <TargetAudience />
      <ModuleFormat />
      <Syllabus />
      <Instructors />
      <BonusGuarantee />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Si la URL contiene un hash (ej. #precios), hacemos scroll al elemento correspondiente
    if (location.hash) {
      const id = location.hash.substring(1);
      // Pequeño timeout para asegurar que el DOM ha terminado de renderizar las secciones
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsConditions />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
