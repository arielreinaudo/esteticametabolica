
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION, CONFIG } from '../constants';
import { trackEvent } from '../services/tracking';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Solo manejamos enlaces internos que empiezan con #
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      
      if (location.pathname !== '/') {
        // Si estamos en una página legal, navegamos al inicio conservando el hash
        navigate('/' + href);
      } else {
        // Si ya estamos en el inicio, buscamos el elemento y hacemos scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          trackEvent('nav_click', { section: id });
        }
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <div className="flex-1 min-w-0 flex items-center">
            <Link 
              to="/" 
              className="text-base sm:text-xl font-bold text-brand-primary tracking-tight truncate whitespace-nowrap"
              title={CONFIG.BRAND_NAME}
            >
              {CONFIG.BRAND_NAME}
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#precios"
              onClick={(e) => handleNavClick(e, '#precios')}
              className="inline-flex items-center px-3 py-1.5 sm:px-6 sm:py-2.5 border border-transparent text-xs sm:text-sm font-black rounded-xl shadow-sm text-white bg-brand-primary hover:bg-brand-accent focus:outline-none transition-all whitespace-nowrap uppercase tracking-wider"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
