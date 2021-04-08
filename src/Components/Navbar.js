import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="index.html">Home</Link>
          <Link to="about">About</Link>
          <a href="contact">Contact</a>
          <a href="resume">Resume</a>
          <a href="portfolio">Portfolio</a>
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
