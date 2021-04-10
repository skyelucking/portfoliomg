import React from "react";
import "../App.css";
import { PortfolioData } from "../data/portfolioData";
import "bootstrap/dist/css/bootstrap.min.css";

export const Portfolios = () => {
  return (
    <>
      
      <div className="container">
        <div className="row">
        
        {PortfolioData.map((data, key) => {
          return (
            <div key={key}>
              <PortInfo
              
                key={key}
                id={data.id}
                title={data.title}
                portImg={data.portImg}
                portLink={data.portLink}
              />
            </div>
            
          );
        })} </div>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <>
    <header className="header text-center" style={{paddingTop: '55px'}}><h1>Portfolio</h1></header>
    </>
  );
};

const PortInfo = ({ id, title, portImg, portLink }) => {
  if (!id) return <div />;
  return (
    <>
    <container>
      <div className="row">
        <div className="col-3-sm" style={{marginLeft: '55px'}}>
     <card ><a href={process.env.PUBLIC_URL + "/#" + portLink}><img src={process.env.PUBLIC_URL + portImg}  className="port-img"></img></a></card>
     </div>
     </div>

   </container>
    </>
  );
};
