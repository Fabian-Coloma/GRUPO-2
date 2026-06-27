
export default function SidebarNav({
  iniciales,
  inicialSeleccionada,
  paisSeleccionado,
  onCambioInicial,
  onSeleccionarPais,
}) {
  return (
    <aside className="w-full md:w-64 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm sticky top-6">
      <h3 className="font-heading font-bold text-gray-800 text-lg mb-4 border-b border-gray-100 pb-2">
        Abecedario ({Object.keys(iniciales).length} Letras)
      </h3>

      <div className="flex flex-wrap md:grid md:grid-cols-4 gap-2 mb-6">
        {Object.keys(iniciales)
          .sort()
          .map((letra) => (
            <button
              key={letra}
              onClick={() => onCambioInicial(letra)}
              className={`h-9 w-9 rounded-lg font-bold text-sm transition-all flex items-center justify-center ${
                inicialSeleccionada === letra
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {letra}
            </button>
          ))}
      </div>

      {inicialSeleccionada && iniciales[inicialSeleccionada] && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-3">
            Países con letra "{inicialSeleccionada}"
          </span>
          <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
            {iniciales[inicialSeleccionada].map((pais, index) => (
              <button
                key={index}
                onClick={() => onSeleccionarPais(pais)}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors block truncate ${
                  paisSeleccionado === pais
                    ? "bg-red-50 text-red-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {pais === "Mexican"
                  ? "México"
                  : pais === "French"
                  ? "Francia"
                  : pais === "Italian"
                  ? "Italia"
                  : pais}
              </button>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}