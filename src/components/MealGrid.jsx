import React from "react";

export default function MealGrid({ comidasFiltradas, paisSeleccionado, onIrRecetas }) {
  return (
    <div className="grow w-full">
      <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-gray-800 border-b pb-2">
        Platos Disponibles {paisSeleccionado ? `— ${paisSeleccionado}` : ""}
      </h3>

      {comidasFiltradas.length === 0 ? (
        <p className="text-gray-400 text-sm italic">
          No se encontraron recetas para esta selección.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {comidasFiltradas.map((comida) => (
            /* Dibujamos la tarjeta directamente aquí para no necesitar un archivo externo */
            <div
              key={comida.idMeal}
              onClick={() => onIrRecetas(comida.idMeal)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={comida.strMealThumb}
                  alt={comida.strMeal}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-800 line-clamp-1 uppercase text-sm group-hover:text-red-600 transition-colors">
                  {comida.strMeal}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {comida.strArea || "Receta Internacional"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}