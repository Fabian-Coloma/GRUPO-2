import React from "react";
import { useMeals } from "../hooks/useMeals";
import SidebarNav from "./SidebarNav";
import MealGrid from "./MealGrid";
import { useNavigate } from "react-router-dom";

export default function Rafa() {
  const {
    comidasFiltradas,
    iniciales,
    inicialSeleccionada,
    paisSeleccionado,
    cargando,
    setPaisSeleccionado,
    manejarCambioInicial,
  } = useMeals();

  const navigate = useNavigate();

  const irALasRecetas = (idMeal) => {
    navigate(`/dish/${idMeal}`);
  };

  if (cargando) {
    return (
      <p className="text-center p-8 text-gray-500">
        Organizando índice alfabético...
      </p>
    );
  }

  return (
    <div className="bg-[#FCF8F2] w-full py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-black uppercase tracking-wider mb-2">
            Índice Gastronómico
          </h2>
          <p className="text-gray-500">
            Busca recetas tradicionales por la inicial del país.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <SidebarNav
            iniciales={iniciales}
            inicialSeleccionada={inicialSeleccionada}
            paisSeleccionado={paisSeleccionado}
            onCambioInicial={manejarCambioInicial}
            onSeleccionarPais={setPaisSeleccionado}
          />

          <MealGrid
            comidasFiltradas={comidasFiltradas}
            paisSeleccionado={paisSeleccionado}
            onIrRecetas={irALasRecetas}
          />
        </div>
      </div>
    </div>
  );
}