import React from "react";

function AboutSkye() {
  return (
    <div>
      <header className="header text-center" style={{ paddingTop: 10, paddingBottom: 20,}}>
        <h1>About Me</h1>
      </header>
      <div className="container" style={{ display: "flex" }}>
        <img
          src={process.env.PUBLIC_URL + "/Assets/Images/skyelucking_about.png"}
          className="imgFluid"
          alt="Skye Lucking - smiling."
          style={{ marginRight: 15 }}
        />
        <div>
          A strong combination of left-brained, highly-technical skills, and
          right-brained, dynamic creativity. I have a broad range of technical
          knowledge as well as an artistic eye. You want someone who is excited
          about the creative process, thinks dynamically, adds positive energy
          to your team, all while being a complete professional. I approach
          projects with a combination of technical know-how, ease with people,
          and a high visual standard. <div style={{marginTop: 10, marginBottom: 10}}>Throughout my life, I've intermingled the
          energies from both the left and right brain to bring artistry to my
          technology and tech-savvy to my artistic endeavors. I enjoy people and
          technology, am prolific if given the chance and guidance, and a
          life-long learner. I want to join a company that can advance and
          encourage these tendencies all while challenging me every day with the
          opportunity to make an impact.</div><div className="alert alert-primary">Interested in my fine-art and murals? Check out my art-focused
          website:{" "}
          <a href="http://www.skyelucking.com" target="_blank">
            http://www.skyelucking.com{" "}
          </a></div>
        </div>
      </div>
    
    </div>
  );
}

export default AboutSkye;
