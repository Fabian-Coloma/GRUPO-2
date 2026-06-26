import React from 'react'

const Bottom = () => {
    const galeriaComida = [
    {
      id: '',
      urlImagen: '',
      linkDestino: '',
      altText: ''
    },
    {
      id: 'img-col2',
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWPeQ3uHGoQ2TzkxAFAPQod0nSbiP4wKhnAj5d7_Oyw&s=10',
      linkDestino: 'https://www.instagram.com/alidaryder/?hl=es',
      altText: 'Comida Mexicana'
    },
    {
      id: 'img-col3-top',
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbUs-tZJh09uBfTDA_8E-dhd4nPGgreYpqEKKTaWJzIg&s=10',
      linkDestino: 'https://www.instagram.com/thereciperebel/?hl=es',
      altText: 'Comida Italiana'
    },
    {
      id: 'img-col3-bottom',
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOoGNZ7LcqpVX65E4VvyvlMQnYEXH0NdG3dIqinAZIRNKOW-jbRRtV_9g&s=10',
      linkDestino: 'https://www.instagram.com/fithealthyrecipes/?hl=es',
      altText: 'Rolls con sésamo'
    },
    {
      id: 'img-col4',
      urlImagen: 'https://s1.r29static.com/bin/entry/357/640x640,85/1448884/image.webp',
      linkDestino: 'https://www.instagram.com/easyfamilyrecipes/?hl=es',
      altText: 'Chef preparando comida'
    },
    {
        id: 'img-col5-top',
        urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hHo138fVSxzpQ-P1elvibg372FQ70h2nkXHHtAjS0g&s=10',
        linkDestino: 'https://www.instagram.com/fromscratchwithbob/',
        altText: 'Nigiri de salmón'
    },
    {
        id: 'img-col5-bottom',
        urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXYCbrfe3lerPa-fUk5V2thCCQLpW1y9gEmiP-24OXQnWdLC2EBe09ycY&s=10',
      linkDestino: 'https://www.instagram.com/spendpennies/?hl=es',
      altText: 'Bandeja completa de sushi'
    }
  ];

  // Estilo reutilizable para los enlaces interactivos
  const linkStyle = "block rounded-3xl overflow-hidden hover:opacity-85 hover:scale-[1.01] transition-all duration-300 shadow-sm";

 return (
    <section className="bg-[#FAF5ED] p-8 w-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto md:h-[450px]">
        
        {/* COLUMNA 1: Texto de la marca + Primera Imagen */}
        <div className="flex flex-col gap-4 justify-between h-full">
          <div className="flex flex-col gap-2 pt-4">
            <div className="bg-[#C8372D] w-12 h-12 rounded-full flex items-center justify-center text-white mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
            <h3 className="font-bold text-xl leading-tight uppercase tracking-widest text-gray-900">
              Food <br /> Accounts <br /> That We Love
            </h3>
          </div>
          
          <a href={galeriaComida[0].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} w-full h-[200px]`}>
            <img src={galeriaComida[0].urlImagen} alt={galeriaComida[0].altText} className="w-full h-full object-cover" />
          </a>
        </div>

        {/* COLUMNA 2: Imagen Larga Vertical */}
        <a href={galeriaComida[1].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} h-full`}>
          <img src={galeriaComida[1].urlImagen} alt={galeriaComida[1].altText} className="w-full h-full object-cover" />
        </a>

        {/* COLUMNA 3: Dos imágenes medianas */}
        <div className="flex flex-col gap-4 h-full">
          <a href={galeriaComida[2].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} flex-1`}>
            <img src={galeriaComida[2].urlImagen} alt={galeriaComida[2].altText} className="w-full h-auto object-cover" />
          </a>
          <a href={galeriaComida[3].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} flex-1`}>
            <img src={galeriaComida[3].urlImagen} alt={galeriaComida[3].altText} className="w-full h-50 object-cover" />
          </a>
        </div>

        {/* COLUMNA 4: Imagen Larga Vertical */}
        <a href={galeriaComida[4].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} h-full`}>
          <img src={galeriaComida[4].urlImagen} alt={galeriaComida[4].altText} className="w-full h-full object-cover" />
        </a>

        {/* COLUMNA 5: Dos imágenes medianas */}
        <div className="flex flex-col gap-4 h-full">
          <a href={galeriaComida[5].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} flex-1`}>
            <img src={galeriaComida[5].urlImagen} alt={galeriaComida[5].altText} className="w-full h-full object-cover" />
          </a>
          <a href={galeriaComida[6].linkDestino} target="_blank" rel="noopener noreferrer" className={`${linkStyle} flex-1`}>
            <img src={galeriaComida[6].urlImagen} alt={galeriaComida[6].altText} className="w-full h-auto object-cover" />
          </a>
        </div>

      </div>
    </section>
  );
};
export default Bottom;