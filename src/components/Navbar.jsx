import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4 md:px-8 bg-brand-cream relative z-50">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* COLUMNA IZQUIERDA: Enlaces Desktop (Ocultos en móvil) */}
        <div className="flex-1 hidden md:flex items-center gap-6 font-body text-sm font-medium">
          <Link to={"/"} className="font-bold hover:text-brand-red transition-colors">Home</Link>
          <Link to={"/about"} className="font-bold hover:text-brand-red transition-colors">About us</Link>
          <Link to={"/dishes"} className="font-bold hover:text-brand-red transition-colors">Dishes</Link>
          
        </div>

        {/* COLUMNA CENTRAL: Logo */}
        <div className="min-w-0 font-heading font-bold text-lg md:text-2xl tracking-wider flex items-center gap-2 px-2">
           <span className="text-brand-red shrink-0" aria-hidden="true">🍝</span>
           ATLAS CUISINE <span>🗺</span>
        </div>

        {/* COLUMNA DERECHA: Botones Desktop (OCULTOS EN MÓVIL con hidden md:flex) */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-6">
        
          <button className="bg-brand-red text-white px-6 py-2 rounded font-body font-medium hover:opacity-90 transition-opacity">
            Explore
          </button>
        </div>

        {/* 4. BOTÓN HAMBURGUESA: (Solo visible en móvil con md:hidden) */}
        <div className="flex-1 flex md:hidden justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Al hacer clic, invierte el estado
            className="text-brand-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </nav>

      {/* 5. EL MENÚ MÓVIL DESPLEGABLE */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mx-auto w-11/12 max-w-sm bg-brand-cream border border-gray-200 shadow-2xl rounded-xl md:hidden mt-2 z-50">
          <div className="flex flex-col px-4 py-6 gap-4 font-body text-center">
            <a href="#" className="hover:text-brand-red transition-colors">Home</a>
            <a href="#" className="hover:text-brand-red transition-colors">About us</a>
            <a href="#" className="hover:text-brand-red transition-colors">Dishes</a>
            
            <hr className="border-gray-300 my-2" />
            
            
           <Link to={"/dishes"}className="bg-brand-red text-white px-6 py-2 rounded font-body font-medium hover:opacity-90 transition-opacity mx-auto w-1/2 min-w-fit inline-block text-center">Explore</Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;