<<<<<<< HEAD
// Asegúrate de que la ruta coincida con donde guardaste Fabian.jsx
import Fabian from './components/Fabian'; 
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  
>>>>>>> 0d68dea77b0d896c5d049e1f90d421829a015bea

function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* Aquí estamos llamando a tu componente para que se renderice */}
      <Fabian /> 
    </div>
  );
=======
    <>
    <BrowserRouter>
    
      <div className="min-h-screen flex flex-col bg-brand-cream text-brand-black font-body">
                <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />

      </div>
      
    </BrowserRouter>
    </>
  )
>>>>>>> 0d68dea77b0d896c5d049e1f90d421829a015bea
}

export default App;