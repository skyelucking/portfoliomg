import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import JumboHello from "./Components/JumboHello";
import AboutSkye from "./Components/About";
import { Portfolios } from "./Components/Portfolios";
import { Bootcamps } from "./Components/Bootcamp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

export function Home() {
  return (
    <div>
      <JumboHello />
    </div>
  );
}

export function About() {
  return (
    <div>
      <AboutSkye />
    </div>
  );
}

export function Resume() {
  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
}
export function Contact() {
  return (
    <div>
      <div className="container" style={{ width: "40%" }}>
        <h1 style={{ textAlign: "center", margin: 12 }}>Contact</h1>
        <div
          className="alert alert-primary"
          style={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "black",
          }}
        >
          {" "}
          <b>Technical Website: </b>
          <a href="https://skyelucking.github.io/index.html" target="_blank">
            https://skyelucking.github.io/index.html
          </a>{" "}
          <br></br>
          <b>Fine-art Website: </b>
          <a href="http://www.skyelucking.com" target="_blank">
            http://www.skyelucking.com
          </a>{" "}
          <br></br>
          <div style={{ textAlign: "center", margin: 5 }}>
            <a
              href="https://www.linkedin.com/in/skyelucking/"
              target="_blank"
              style={{ margin: 10 }}
            >
              <LinkedInIcon />
            </a>

            <a
              href="mailto:lucking.skye@gmail.com"
              target="_blank"
              style={{ margin: 10 }}
            >
              <EmailIcon />
            </a>

            <a
              href="https://github.com/skyelucking"
              target="_blank"
              style={{ margin: 10 }}
            >
              <GitHubIcon />
            </a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export function Portfolio({ id, title, content, link, thumb, slug }) {
  return (
    <>
      <div>
        <Portfolios />
      </div>
    </>
  );
}

export function BootPort({ id, title, content, link, thumb, slug }) {
  return (
    <>
      <div>
        <header class="header text-center">
          <img
            src={
              process.env.PUBLIC_URL +
              "/Assets/Images/codingbootcamp_header.png"
            }
            className="portlong-img img-fluid"
            alt="Full Stack Developer Coding Bootcamp at University of Arizona"
            style={{ marginBottom: "30px" }}
          ></img>
        </header>
        <div className="container" style={{ width: "60%" }}>
          <b>
            None of the projects below would have been possible without my tutor
            <a href="https://www.linkedin.com/in/fredrodolfo/"> Fred Rodolfo</a>, my instructor, <a href="https://www.linkedin.com/in/logan-garland-b941106/">Logan Garland</a>, and class TA, <a href="https://www.linkedin.com/in/nellie-nelson/">Nellie
            Nelson</a>! For an extended portfolio of other technical work visit <a href="#/portfolio">this page</a>.
          </b>{" "}
        </div>
        <div className="container text-center" style={{ textAlign: "center" }}>
          <a href="https://www.linkedin.com/in/fredrodolfo/">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/fredrodolfo.png"}
              className="img-fluid"
              alt="Full Stack Developer Coding Bootcamp at University of Arizona"
              style={{ margin: "5px", width: 150 }}
            ></img>
          </a>{" "}
          <a href="https://www.linkedin.com/in/logan-garland-b941106/">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/logangarland.png"}
              className="img-fluid"
              alt="Full Stack Developer Coding Bootcamp at University of Arizona"
              style={{ margin: "5px", width: 150 }}
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/nellie-nelson/">
          <img
            src={process.env.PUBLIC_URL + "/Assets/Images/nellienelson.png"}
            className="img-fluid"
            alt="Full Stack Developer Coding Bootcamp at University of Arizona"
            style={{ margin: "5px", width: 150 }}
          ></img></a>
        </div>
        <Bootcamps />
      </div>
    </>
  );
}

export function CodingBootcamp() {
  return (
    <div>
      <h1>Full-Stack Developer Coding Bootcamp</h1>
    </div>
  );
}
export function UnityDev() {
  return (
    <div>
      <h1>AR/VR/XR and Unity Development</h1>
    </div>
  );
}

export function InstructionalDesign() {
  return (
    <div>
      <h1>Instructional Design and Corporate Training</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
}
