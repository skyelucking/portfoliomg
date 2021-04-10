import React from "react";

function About() {
  return (
    <div>
      <header className="header text-center" style="padding-top: 50px; ">
        <h1>About Me</h1>
      </header>

      <div
        className="container"
        style={{ paddinTop: "40px", marginBottom: "20px" }}
      >
        <div className="row">
          <div className="col-sm-6 ">
            <img
              src="Assets/Images/skyelucking_about.png"
              className="imgFluid"
              alt="Skye Lucking picture - smiling."
            />
            <div className="col-sm-6 ">
              <article className="row">
                <p>
                  A strong combination of left-brained, highly-technical skills,
                  and right-brained, dynamic creativity. I have a broad range of
                  technical knowledge as well as an artistic eye. You want
                  someone who is excited about the creative process, thinks
                  dynamically, adds positive energy to your team, all while
                  being a complete professional. I approach projects with a
                  combination of technical know-how, ease with people, and a
                  high visual standard.
                </p>
                <p>
                  {" "}
                  Throughout my life, I've intermingled the energies from both
                  the left and right brain to bring artistry to my technology
                  and tech-savvy to my artistic endeavors. I enjoy people and
                  technology, am prolific if given the chance and guidance, and
                  a life-long learner. I want to join a company that can advance
                  and encourage these tendencies all while challenging me every
                  day with the opportunity to make an impact.
                </p>
              </article>
              <div className="alert alert-primary" role="alert">
                <div className="container">
                  Interested in my fine-art and murals? Check out my art-focused
                  website:{" "}
                  <a href="http://www.skyelucking.com" target="_blank">
                    http://www.skyelucking.com{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
