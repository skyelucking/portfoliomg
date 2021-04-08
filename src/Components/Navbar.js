import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom"
import { Home, About, Resume, Contact, Portfolio, Whoops404, CodingBootcamp,  UnityDev, InstructionalDesign } from "../pages";


function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
         <Link to="/contact">Contact</Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {" "}
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide"></div>
    </div>
  );
}

export default Navbar;
