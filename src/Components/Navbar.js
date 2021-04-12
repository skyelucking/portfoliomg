import React, { useState  } from "react";
import "../App.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link, DropdownItem } from "react-router-dom"
import { Home, About, Resume, Contact, Portfolio, Whoops404, CodingBootcamp,  UnityDev, InstructionalDesign } from "../pages";
import "bootstrap/dist/css/bootstrap.min.css";




function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          
        <Link to="/">Home  |</Link>
        <Link to="/about"> About  |</Link>
        <a href="https://skyelucking.github.io/02-responsive-portfolio/Assets/SkyeResume.pdf">Resume  |</a>
        <Link to="/bootcamp" >Bootcamp Portfolio  |</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          {" "}
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide">
        <div className="menu"></div>
      </div>
    </div>
  );
}



export default Navbar;
