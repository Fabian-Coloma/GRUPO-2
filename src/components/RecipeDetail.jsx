import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecipeDetail() {
  // "idReceta" debe llamarse exactamente igual que en el Route de App.jsx
  const { idReceta } = useParams(); 
  const navigate = useNavigate();

  const [receta, setReceta] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerReceta() {
      try {
        setCargando(true);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceta}`);
        const data = await res.json();
        
        if (data.meals) {
          setReceta(data.meals[0]);
        } else {
          setError("No se encontró la receta seleccionada.");
        }
      } catch (err) {
        console.error(err);
        setError("Error al conectar con el servidor.");
      } finally {
        setCargando(false);
      }
    }

    obtenerReceta();
  }, [idReceta]);

  if (cargando) return <p className="text-center p-12 text-gray-500">Cargando detalles...</p>;
  if (error) return <p className="text-center p-12 text-red-500">{error}</p>;

  const ingredientes = [];
  for (let i = 1; i <= 20; i++) {
    const ingrediente = receta[`strIngredient${i}`];
    const medida = receta[`strMeasure${i}`];
    if (ingrediente && ingrediente.trim()) {
      ingredientes.push({ nombre: ingrediente.trim(), medida: medida ? medida.trim() : '' });
    }
  }

  return (
    <div className="bg-[#FCF8F2] min-h-screen py-12 px-4 sm:px-6 font-body">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        
        <button 
          onClick={() => navigate('/dishes')} 
          className="mb-6 text-sm font-bold text-red-600 hover:underline flex items-center gap-1"
        >
          ← Volver al Índice Gastronómico
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden h-72 md:h-full max-h-96">
            <img src={receta.strMealThumb} alt={receta.strMeal} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full w-fit">
              {receta.strCategory}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 uppercase tracking-tight mt-3">
              {receta.strMeal}
            </h2>
            <p className="text-gray-400 text-sm">Origen: {receta.strArea}</p>

            <h3 className="font-heading font-bold text-gray-800 text-lg mt-6 mb-3 border-b pb-1">
              Ingredientes
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2">
              {ingredientes.map((ing, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{ing.medida} <strong>{ing.nombre}</strong></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="font-heading font-bold text-gray-800 text-xl mb-4">Instrucciones</h3>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{receta.strInstructions}</p>
        </div>

      </div>
    </div>
  );
}