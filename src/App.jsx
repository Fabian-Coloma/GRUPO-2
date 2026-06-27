import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dishes from './pages/Dishes';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-brand-cream text-brand-black font-body">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/dish/:idReceta' element={<RecipeDetail/>}/>

            
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;