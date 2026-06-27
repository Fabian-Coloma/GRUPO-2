import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
    <BrowserRouter>
    
      <div className="min-h-screen flex flex-col bg-brand-cream text-brand-black font-body">
                <Navbar />

        <main className="grow">
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
}

export default App
