import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { black } from "material-ui/styles/colors";

function JumboHello() {
  return (
    <div
      className="container"
      style={{paddingTop: 35, marginBottom: 10, marginTop: 10,}}
    >
      <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-12">
          <img
            src={process.env.PUBLIC_URL + '/Assets/Images/SkyeSiteHeader_rightandleft.jpg'}
            className="img-fluid"
            alt="A brain that has two background images. A coding screen on the left and painting on the right. "
          ></img>
          <div className="container-lg alert-primary" style={{marginTop: 10, padding: 10, borderColor: black, borderSize: 1, borderStyle: 'solid', fontSize: '1em', }}>Unity 3D Certified, currently enrolled in a full-stack developer boot-camp through University of Arizona, and looking to work with a company remotely. You want someone who is excited about the creative process, thinks dynamically, adds positive energy to your team, all while being a complete professional. I approach projects with a combination of technical know-how, ease with people, and high aesthetic standard. Throughout my life, I've intermingled the energies from both the left and right sides of the brain to bring artistry to my technology and tech-savvy to my artistic endeavors. I enjoy people and technology, am prolific if given the chance and guidance, and a life-long learner.</div>
        </div>
      </div>
    </div>
  );
}
export default JumboHello;
