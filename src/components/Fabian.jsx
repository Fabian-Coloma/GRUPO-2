import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Fabian() {
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate(); 

  
  const nombresEnEspanol = {
    Chicken: 'Pollo',
    Beef: 'Carne',
    Pork: 'Cerdo',
    Seafood: 'Salmón'
  };

  useEffect(() => {
    
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(respuesta => respuesta.json())
      .then(datos => {
       
        const categoriasElegidas = datos.categories.filter(cat => 
          cat.strCategory === 'Chicken' || 
          cat.strCategory === 'Beef' || 
          cat.strCategory === 'Pork' || 
          cat.strCategory === 'Seafood'
        );
        
        setCategorias(categoriasElegidas);
      })
      .catch(error => {
        console.log("Hubo un error cargando la API", error);
      });
  }, []);

  
const irALasRecetas = (categoriaNombre) => {
    navigate(`/dishes?categoria=${categoriaNombre}`); 
  };

  return (
    <div className="bg-[#FCF8F2] py-10 w-full">
      
    
      <div className="flex flex-wrap justify-center gap-20">
        
        {categorias.map(cat => (
          <div 
            key={cat.idCategory} 
            onClick={() => irALasRecetas(cat.strCategory)}
            className="flex flex-col items-center cursor-pointer"
          >
           
            <h2 className="text-xl font-bold uppercase mb-3 text-black">
              {nombresEnEspanol[cat.strCategory]}
            </h2>
            
            
            <div className="w-32 h-47 rounded-full overflow-hidden bg-black border-4 border-transparent hover:border-red-500">
              <img 
                src={cat.strCategoryThumb} 
                alt={cat.strCategory} 
                className="w-full h-full object-cover scale-165" 
              />
            </div>
          </div>
        ))}
{/* hola */}
      </div>
    </div>
  );
}