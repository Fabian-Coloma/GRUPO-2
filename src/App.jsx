import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bottom from './components/Bottom';

function App() {  

  return (
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
      <Bottom/>
        <Footer />
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
