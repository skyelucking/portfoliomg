import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Resume, Contact, Portfolio, Whoops404, CodingBootcamp,  UnityDev, InstructionalDesign } from "./pages";
import Navbar from "./Components/Navbar"
import JumboHello from "./Components/JumboHello"

function App() {
  return (
    
      
  
    <div>
      <Navbar />
      <JumboHello />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="/bootcamp" element={<CodingBootcamp />} />
          <Route path="/unity" element={<UnityDev />} />
          <Route path="/instructionaldesign" element={<InstructionalDesign />} />
          
           </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes> */}
    </div>
  );
}

export default App;
