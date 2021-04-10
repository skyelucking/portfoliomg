import React from "react";
import "../App.css";
import { BootcampData } from "../data/bootcampData";
import "bootstrap/dist/css/bootstrap.min.css";

export const Bootcamps = () => {
  return (
    <>
      <div className="container text-center" style={{textAlign: 'center'}} >
        <div className="row" style={{justifyContent: 'center', borderWidth: 2, borderColor: 'black'}}>
          <div className="col-7" style={{justifyContent: 'center', borderWidth: 2, borderColor: 'grey', borderStyle: 'solid'}}>
          {BootcampData.map((data, key) => {
            return (
              <div key={key}>
                <BootInfo
                  key={key}
                  id={data.id}
                  title={data.title}
                  portImg={data.portImg}
                  deployLink={data.deployLink}
                  repoLink={data.repoLink}
                  content={data.content}
                  grade={data.grade}
                  graderComs={data.graderComs}
                />


                <div style={{ fontWeight: "bold", marginLeft: "15", fontSize: 30 }}> {data.title}
                  </div>
                <div>
            <a href={data.deployLink}>
              <img
                src={process.env.PUBLIC_URL + data.portImg}
                
              ></img>
            </a>
          </div>
                
                <div><b>Description: </b>{data.content}</div>
                <div><b>Deploy Link:</b> <a href={data.deployLink}>{data.deployLink}</a></div>
                <div><b>Repo Link: </b><a href={data.repoLink}>{data.repoLink}</a></div>
                <div><b>Grade:</b> <b>{data.grade}</b></div>
                <div><b>Grader Comments: </b>{data.graderComs}</div>
                <br></br>
                <hr></hr>
              </div>
            );
          })}{" "}
        </div></div>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <>
      <header className="header text-center" style={{ paddingTop: "55px" }}>
        <h1>Bootcamp</h1>
      </header>
    </>
  );
};

const BootInfo = ({
  id,
  title,
  portImg,
  deployLink,
  repoLink,
  content,
  grade,
  graderComs,
}) => {
  if (!id) return <div />;
  return (
    <>
      
      
          {" "}
        
     
    </>
  );
};
