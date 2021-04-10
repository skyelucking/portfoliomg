import React from "react";
import "./App.css";
import { PortfolioData } from "./portfolioData";

export const Portfolios = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
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
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your PortInfo Tracker</h2>
    </header>
  );
};

const PortInfo = ({ id, title, portImg, portLink }) => {
  if (!id) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{id}</h5>
          </td>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h4>{portImg}</h4>
          </td>
          <td>
            <p>{portLink}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
