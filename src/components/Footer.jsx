import React from 'react';

const Footer = () => {
  return (
  
    <footer className="w-full bg-brand-cream border-t border-gray-200 py-12 px-6 md:px-8 mt-16 z-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
        
        {/* COLUMNA 1: Company */}
        <div className="flex flex-col gap-3 font-body">
          <h3 className="font-heading font-bold text-lg mb-2">COMPANY</h3>
          <a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Home</a>
          <a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">About Us</a>
          <a href="#" className="text-sm text-gray-600 hover:text-brand-red transition-colors">Dishes</a>
          <a href="https://funvalinternacional.org/" target="_blank" className="text-sm text-gray-600 hover:text-brand-red transition-colors">FUNVAL</a>

        </div>

        {/* COLUMNA 2: Centro (Logo y Suscripción) */}
        <div className="flex flex-col items-center gap-4">
          <div className="font-heading font-bold text-2xl tracking-wider flex items-center gap-2">
            <span className="text-brand-red" aria-hidden="true">🍝</span>
            ATLAS CUISINE <spa>🗺</spa>
          </div>
          
          {/* Formulario de Suscripción */}
          <form className="w-full max-w-sm flex flex-col gap-3 mt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-brand-red bg-white text-sm"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-brand-red text-white font-body font-medium py-2 rounded hover:opacity-90 transition-opacity"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* COLUMNA 3: Template */}
        <div className="flex flex-col gap-3 font-body md:items-end">
          <h3 className="font-heading font-bold text-lg mb-2">GRUPO 2</h3>
          <a href="https://my-portfolio-seven-gamma-61.vercel.app/" target="_blank"
          className="text-sm text-gray-600 hover:text-brand-red transition-colors">Fabian Coloma</a>
          <a href="https://my-portfolio-seven-gamma-61.vercel.app/" target="_blank"
          className="text-sm text-gray-600 hover:text-brand-red transition-colors">Rafael Lopez</a>
          <a href="https://my-portfolio-seven-gamma-61.vercel.app/" target="_blank"  
          className="text-sm text-gray-600 hover:text-brand-red transition-colors">Ricardo Miranda</a>
          <a  href="https://my-portfolio-seven-gamma-61.vercel.app/" target="_blank" 
          className="text-sm text-gray-600 hover:text-brand-red transition-colors">Pamela Suárez</a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;