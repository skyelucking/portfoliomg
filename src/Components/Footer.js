import "../App.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
   return (
    <div>
    <div className='Footer'>
      <nav className='navbar fixed-bottom' >
      <div className='container-sm justify-content-center'>
             <a className='nav-link' href='https://www.linkedin.com/in/skyelucking/' target='_blank'><LinkedInIcon /></a><br/>
             <a className='nav-link' href='mailto:lucking.skye@gmail.com' target='_blank'><EmailIcon /></a><br/>
             
             <a className='nav-link' href='https://github.com/skyelucking' target='_blank'><GitHubIcon /></a><br/>
      </div>
  </nav>
    </div>
    </div>
  );
}



export default Footer;
