
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Router>
       <div className="font-sans flex h-[calc(100vh+100px)] w-full">
      {/* Left 50% */}
      <div className="w-1/2">
        
      </div>

      {/* Right 50% */}
      <div className="w-1/2 bg-[#FBFAF3]">
        
      </div>

      <div className="absolute inset-0">
        <Navbar />
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
        <Footer />
      </div>
    </div>
    </Router>
    </>
  )
}

export default App
