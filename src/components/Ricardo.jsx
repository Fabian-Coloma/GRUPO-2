import { useState, useEffect } from "react"

export default function Ricardo() {
  const [comidas, setComidas] = useState([])
  const [mostrando, setMostrando] = useState(0)
  const [elementos, setElementos] = useState({ ingredientes: [], instrucciones: "", nombre: "" })
  const [modalAbierto, setModalAbierto] = useState(false)
  const [modalReceta, setModalReceta] = useState(null)
  const [trabajando, setTrabajando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        const data = await res.json()
        setComidas(data.meals)
      } catch {
        setError("Failed to load recipes. Please try again.")
      } finally {
        setTrabajando(false)
      }
    }
    fetchComidas()
  }, [])

  useEffect(() => {
    if (comidas.length === 0) return
    const interval = setInterval(() => {
      setMostrando(prev => (prev + 1) % comidas.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [comidas])

  async function verIngredientes() {
    const comida = comidas[mostrando]
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + comida.idMeal)
      const data = await res.json()
      const m = data.meals[0]
      const lista = []
      for (let i = 1; i <= 20; i++) {
        const ing = m["strIngredient" + i]
        const med = m["strMeasure" + i]
        if (ing && ing.trim()) lista.push({ nombre: ing.trim(), medida: med ? med.trim() : "" })
      }
      setElementos({ ingredientes: lista, instrucciones: m.strInstructions, nombre: m.strMeal })
      setModalAbierto(true)
    } catch {
      alert("Failed to load ingredients. Please try again.")
    }
  }

  async function abrirReceta() {
    const comida = comidas[mostrando]
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + comida.idMeal)
      const data = await res.json()
      setModalReceta(data.meals[0])
    } catch {
      alert("Failed to load recipe. Please try again.")
    }
  }

  async function verMasRecetas() {
    try {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await res.json()
      setComidas(prev => [data.meals[0], ...prev])
      setMostrando(0)
    } catch {
      alert("Failed to load recipe. Please try again.")
    }
  }

  if (trabajando) return <p className="p-8 text-gray-500">Cargando Recetas...</p>
  if (error) return <p className="p-8 text-red-500">{error}</p>

  const comida = comidas[mostrando]

  return (
    <section className="flex items-start gap-8 px-8 py-16">

      <div className="flex-1">
        <h2 className="text-5xl font-black uppercase leading-tight">Reacetas Deliciosas!</h2>
        <p className="text-gray-500 mt-2">Deliciosas Recetas con sus ingredientes! .</p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          key={comida.idMeal}
          src={comida.strMealThumb}
          alt={comida.strMeal}
          onClick={abrirReceta}
          className="w-80 h-80 object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>

      <div className="flex-1">
        <h3 onClick={abrirReceta} className="text-2xl font-black uppercase cursor-pointer hover:text-gray-600 transition-colors">{comida.strMeal}</h3>
        <p onClick={abrirReceta} className="text-gray-600 text-sm leading-relaxed mt-3 mb-6 max-h-36 overflow-y-auto cursor-pointer">{comida.strInstructions}</p>
        <button onClick={verIngredientes} className="block bg-red-600 text-white px-5 py-2.5 rounded font-bold hover:bg-red-700 transition-colors mb-8">
          View Ingredients
        </button>
        <button onClick={verMasRecetas} className="block border border-gray-800 px-5 py-2.5 rounded hover:bg-gray-100 transition-colors">
          More Recipes →
        </button>
      </div>

      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl w-11/12 max-w-md max-h-screen overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">{elementos.nombre}</h3>
            <h4 className="font-semibold mb-2">Ingredients</h4>
            <ul className="list-disc pl-5 space-y-1">
              {elementos.ingredientes.map((ing, i) => (
                <li key={i} className="text-sm">
                  {ing.medida}{" "}
                  <a href={"https://www.google.com/search?q=" + ing.nombre.replace(/ /g, "+") + "+ingrediente+que+es+y+donde+comprar+cerca"} target="_blank" rel="noreferrer" className="text-red-600 hover:underline">
                    {ing.nombre}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => setModalAbierto(false)} className="mt-6 border border-gray-400 px-5 py-2 rounded hover:bg-gray-100 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}

  {modalReceta && (
  <div className="fixed inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center">
    <div className="relative bg-white p-8 rounded-xl w-11/12 max-w-lg max-h-screen overflow-y-auto">
      <a href={"https://www.google.com/search?q=restaurantes+" + modalReceta.strMeal.replace(/ /g, "+") + "+cerca+abiertos+ahora+precio"} target="_blank" rel="noreferrer" className="absolute top-4 right-4 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors text-xl">{"🍽️"}</a>
      <img src={modalReceta.strMealThumb} alt={modalReceta.strMeal} className="w-full rounded-lg mb-4" />
      <h3 className="text-xl font-black uppercase">{modalReceta.strMeal}</h3>
      <p className="text-gray-500 text-sm mt-1">{modalReceta.strArea} · {modalReceta.strCategory}</p>
      <p className="text-sm leading-relaxed mt-4">{modalReceta.strInstructions}</p>
      <button onClick={verIngredientes} className="mt-6 mr-3 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition-colors">
          View Ingredients
          </button>
      <button onClick={() => setModalReceta(null)} className="mt-6 border border-gray-400 px-5 py-2 rounded hover:bg-gray-100 transition-colors">Close</button>
    </div>
  </div>
)}

    </section>
  )
}
