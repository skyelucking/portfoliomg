import React from "react";
// import "./App.css";
import { PortInfo } from "../data/PortfolioGrid";

function PortGrid({id, title, content, link, thumb, slug}) {
  return (
 
    <div>
      <header className="header text-center" style={{paddingTop: '50px'}}>
        <h1>{title}</h1>
      </header>
      {id}
    </div>
      
);
}

 
export default PortGrid;
