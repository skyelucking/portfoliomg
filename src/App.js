import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Resume, Contact, Portfolio, Whoops404, BootPort,  UnityDev, InstructionalDesign } from "./pages";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import BootPorts from "./Components/Bootcamp"


function App() {
  return (

    <div>
      <Navbar />
     
      <Routes>
      <Route path="/bootcamp" element={<BootPort />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />}>
        
          <Route path="/unity" element={<UnityDev />} />
          <Route path="/instructionaldesign" element={<InstructionalDesign />} />
          
           </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
