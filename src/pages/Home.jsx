import React from 'react';
import Ricardo from '../components/Ricardo';
import Fabian from '../components/Fabian';
import Rafa from '../components/rafa';

const Home = () => {
  return (
    <div>
      {/* Banner / Hero Principal de la Landing */}
      <div className="p-8 text-center bg-white">
        <h1 className="text-3xl font-bold font-heading text-brand-red">Welcome To Atlas Cuisine</h1>
        <p className="mt-4 text-gray-600">Explora el mapa del sabor junto a nuestro equipo.</p>
      </div>

      {/* Secciones de los colaboradores organizadas como bloques de la Landing */}
      <Ricardo />
      <Fabian />
    </div>
  );
};

export default Home;