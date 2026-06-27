import { useState, useEffect } from "react";

export function useMeals() {
  const [todasLasComidas, setTodasLasComidas] = useState([]);
  const [comidasFiltradas, setComidasFiltradas] = useState([]);
  const [iniciales, setIniciales] = useState({});
  const [inicialSeleccionada, setInicialSeleccionada] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function procesoDeApi() {
      try {
        const resCategorias = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        const datosCategorias = await resCategorias.json();

        if (!datosCategorias.meals) return;
        const categoriesDinamicas = datosCategorias.meals.map(
          (cat) => cat.strCategory
        );

        const promesas = categoriesDinamicas.map((cat) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
          ).then((res) => res.json())
        );
        const resultados = await Promise.all(promesas);

        let comidasUnificadas = [];
        resultados.forEach((data) => {
          if (data.meals)
            comidasUnificadas = [...comidasUnificadas, ...data.meals];
        });

        const comidasUnicas = comidasUnificadas.filter(
          (comida, indice, self) =>
            self.findIndex((c) => c.idMeal === comida.idMeal) === indice
        );
        setTodasLasComidas(comidasUnicas);

        const conteoPaises = {};
        comidasUnicas.forEach((item) => {
          const pais = item.strCountry || item.strArea;
          if (pais) {
            conteoPaises[pais] = (conteoPaises[pais] || 0) + 1;
          }
        });

        const paisesValidos = Object.keys(conteoPaises).filter(
          (pais) => conteoPaises[pais] >= 0
        );

        const mapaIniciales = {};
        paisesValidos.forEach((pais) => {
          const letraInicial = pais.charAt(0).toUpperCase();
          if (!mapaIniciales[letraInicial]) {
            mapaIniciales[letraInicial] = [];
          }
          mapaIniciales[letraInicial].push(pais);
        });

        Object.keys(mapaIniciales).forEach((letra) => {
          mapaIniciales[letra].sort();
        });

        setIniciales(mapaIniciales);

        const listaLetras = Object.keys(mapaIniciales).sort();
        if (listaLetras.length > 0) {
          const primeraLetra = listaLetras[0];
          setInicialSeleccionada(primeraLetra);
          if (mapaIniciales[primeraLetra].length > 0) {
            setPaisSeleccionado(mapaIniciales[primeraLetra][0]);
          }
        }
      } catch (error) {
        console.error("Error agrupando por iniciales:", error);
      } finally {
        setCargando(false);
      }
    }

    procesoDeApi();
  }, []);

  useEffect(() => {
    if (!paisSeleccionado || todasLasComidas.length === 0) return;

    const filtradas = todasLasComidas.filter(
      (comida) => (comida.strCountry || comida.strArea) === paisSeleccionado
    );
    setComidasFiltradas(filtradas);
  }, [paisSeleccionado, todasLasComidas]);

  const manejarCambioInicial = (letra) => {
    setInicialSeleccionada(letra);
    if (iniciales[letra] && iniciales[letra].length > 0) {
      setPaisSeleccionado(iniciales[letra][0]);
    }
  };

  return {
    comidasFiltradas,
    iniciales,
    inicialSeleccionada,
    paisSeleccionado,
    cargando,
    setPaisSeleccionado,
    manejarCambioInicial,
  };
}